import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import './OrderPage.css'
import { connect } from 'react-redux'
import Header from '../Header/Header'
import * as axios from 'axios'
import { setOrder } from '../../db'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { clearCart } from '../../redux/cart-reducer'
import Loader from '../Loader/Loader'
import { useNavigate } from 'react-router-dom'
// const deliveryWorking = true
const Input = ({ field, form, ...props }) => {
  return (
    <div className="form__group">
      <input
        type={props.type}
        className="form__input"
        spellCheck="false"
        {...field}
        placeholder=" "
        required={props.required}
      />
      <label className="form__label">{props.label}</label>
    </div>
  )
}
const PhoneInput = ({ field, form, ...props }) => {
  const inputEl = useRef()
  useEffect(() => {
    inputEl.current.addEventListener('input', onPhoneInput)
    inputEl.current.addEventListener('keydown', onPhoneKeyDown)
    inputEl.current.addEventListener('paste', onPhonePaste)
  }, [])
  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g, '')
  }
  const onPhoneKeyDown = (e) => {
    let inputValue = e.target.value.replace(/\D/g, '')
    if (e.keyCode == 8 && inputValue.length == 1) {
      props.setFieldValue('phone', '')
    }
  }
  const onPhonePaste = (e) => {
    let pasted = e.clipboardData || window.clipboardData,
      input = e.target,
      inputNumbersValue = getInputNumbersValue(input)
    if (pasted) {
      let pastedText = pasted.getData('Text')
      if (/\D/g.test(pastedText)) {
        props.setFieldValue('phone', inputNumbersValue)
        return
      }
    }
  }
  const onPhoneInput = (e) => {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '',
      selectionStart = input.selectionStart
    if (!inputNumbersValue) {
      return props.setFieldValue('phone', '')
    }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') {
        inputNumbersValue = '7' + inputNumbersValue
      }
      // let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7'
      // let firstSymbols = inputNumbersValue[0] == '8' ? '+7' : '+7'
      // let firstSymbols = inputNumbersValue[0] == '8' && '+7'
      let firstSymbols = '+7'
      formattedInputValue = input.value = firstSymbols + ' '
      if (inputNumbersValue.length > 1) {
        formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
      }
      //Russian number
    } else {
      return props.setFieldValue('phone', '')
      // formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
      // Not Russian number
    }
    props.setFieldValue('phone', formattedInputValue)
  }

  return (
    <div className="form__group">
      <input
        type="tel"
        className="form__input"
        spellCheck="false"
        required
        maxLength="18"
        {...field}
        placeholder=" "
        ref={inputEl}
      />
      <label className="form__label">Телефон</label>
    </div>
  )
}
const OrderPage = (props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    })
  }, [])

  const [isLoading, setIsLoading] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  let navigate = useNavigate()
  const routeChange = () => {
    let path = `/cart/order/success`
    navigate(path)
  }
  const submit = async (values) => {
    setIsLoading(true)
    fetch(
      `https://api.ipgeolocation.io/timezone?apiKey=${process.env.REACT_APP_TIME_API_KEY}&tz=Asia/Yekaterinburg`
    )
      .then((response) => response.json())
      .then((data) => {
        let deliveryWorking = true
        let day = data.date_time_txt
          .slice(0, data.date_time_txt.search(','))
          .toLowerCase()
        let currentHour = parseInt(data.time_24.slice(0, 2), 10)
        if (day.match(/^(friday|saturday|sunday)$/) && currentHour < 1) {
        } else if (
          day.match(/^(monday|tuesday|wednesday|sunday)$/) &&
          currentHour >= 12 &&
          currentHour < 23
        ) {
        } else if (
          day.match(/^(thursday|friday|saturday)$/) &&
          currentHour >= 12
        ) {
        } else {
          deliveryWorking = false
        }
        if (deliveryWorking) {
          setOrder({
            ...values,
            cart: props.items,
            total: props.sum,
            orderDate: data.date_time,
          }).then(() => {
            props.clearCart()
            routeChange()
          })
        } else {
          setOpenModal(true)
          setIsLoading(false)
          return
        }
      })
  }
  return (
    <div className="form-wrapper">
      {openModal && <Modal closeModal={setOpenModal} />}
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          entrance: '',
          domofon: '',
          floor: '',
          flat: '',
          comment: '',
        }}
        onSubmit={submit}
      >
        {(props) => (
          <Form className="form">
            <Field
              type="text"
              name="name"
              label="Имя"
              component={Input}
              required
            />
            <Field
              name="phone"
              component={PhoneInput}
              setFieldValue={props.setFieldValue}
            ></Field>

            <Field
              type="text"
              name="address"
              label="Адрес"
              component={Input}
              required
            />
            <div className="form__wrapper-input">
              <Field
                type="text"
                name="entrance"
                label="Подъезд"
                component={Input}
                required
              />
              <Field
                type="text"
                name="domofon"
                label="Домофон"
                component={Input}
                required
              />
              <Field
                type="text"
                name="floor"
                label="Этаж"
                component={Input}
                required
              />
              <Field
                type="text"
                name="flat"
                label="Кв./Офис"
                component={Input}
                required
              />
            </div>
            <Field
              type="text"
              name="comment"
              label="Комментарий"
              component={Input}
            />
            <button type="submit" className="form__button" disabled={isLoading}>
              {isLoading ? <Loader /> : 'Подтвердить заказ'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
let mapStateToProps = (state) => {
  return {
    items: state.cart.items,
    sum: state.cart.sum,
  }
}
export default connect(mapStateToProps, { clearCart })(OrderPage)
