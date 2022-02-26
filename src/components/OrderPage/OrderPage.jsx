import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import './OrderPage.css'
import { connect } from 'react-redux'
import Header from '../Header/Header'
const Input = ({ field, form, ...props }) => {
  // console.log(props)
  // console.log(inputEl)
  return (
    <div className="form__group">
      <input
        type={props.type}
        className="form__input"
        spellCheck="false"
        {...field}
        // {...props}
        // onChange={props.onChange}
        required
        // ref={props.innerRef}
        // placeholder={props.placeHolder}
        // maxLength={props.maxLength}
        // value={props.inpValue}
        // onChange={props.handleChange}
      />
      <label className="form__label">{props.label}</label>
    </div>
  )
}
const PhoneInput = ({ field, form, ...props }) => {
  // let [inputVal, setInputVal] = useState('1')
  // console.log(props)
  // props.onChange()
  // console.log(field)
  const inputEl = useRef()
  useEffect(() => {
    // console.log('usef')
    // props.setFieldValue('phone', '7')
    // let phoneInputs = document.querySelectorAll('input[name="phone"]')
    // for (var i = 0; i < phoneInputs.length; i++) {
    //   let input = phoneInputs[i]
    //   input.addEventListener('input', onPhoneInput)
    //   input.addEventListener('keydown', onPhoneKeyDown)
    //   input.addEventListener('paste', onPhonePaste)
    // }
    // console.log(inputEl)
    inputEl.current.addEventListener('input', onPhoneInput)
    inputEl.current.addEventListener('keydown', onPhoneKeyDown)
    inputEl.current.addEventListener('paste', onPhonePaste)
    return () => {
      inputEl.current.removeListener('input', onPhoneInput)
      inputEl.current.removeListener('keydown', onPhoneKeyDown)
      inputEl.current.removeListener('paste', onPhonePaste)
    }
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
    console.log('called')
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      formattedInputValue = '',
      selectionStart = input.selectionStart
    console.log(selectionStart)
    if (!inputNumbersValue) {
      // return (input.value = '')
      return props.setFieldValue('phone', '')
    }
    // if (input.value.length != selectionStart) {
    //   if (e.data && /\D/g.test(e.data)) {
    //     input.value = inputNumbersValue
    //     // props.setFieldValue('phone', inputNumbersValue)
    //   }
    //   return
    // }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') {
        inputNumbersValue = '7' + inputNumbersValue
      }
      let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7'
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
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
      // Not Russian number
    }
    // input.value = formattedInputValue
    props.setFieldValue('phone', formattedInputValue)
    // setFieldValue('phone', formattedInputValue)
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
        // value={inputVal}
        // onChange={(values) => setInputVal(values.currentTarget.value)}
        // {...props}
        // onChange={props.onChange}
        ref={inputEl}
      />
      <label className="form__label">Телефон</label>
    </div>
  )
}
const OrderPage = (props) => {
  const submit = (values) => {
    console.log(values, props.items)
  }
  return (
    <div>
      <Header whatPage={'Заказ'} />
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
            <Field type="text" name="name" label="Имя" component={Input} />
            <Field
              name="phone"
              component={PhoneInput}
              setFieldValue={props.setFieldValue}
              // onChange={props.setFieldValue('phone', '7')}
            ></Field>

            <Field type="text" name="address" label="Адрес" component={Input} />
            <div className="form__wrapper-input">
              <Field
                type="text"
                name="entrance"
                label="Подъезд"
                component={Input}
              />
              <Field
                type="text"
                name="domofon"
                label="Домофон"
                component={Input}
              />
              <Field type="text" name="floor" label="Этаж" component={Input} />
              <Field
                type="text"
                name="flat"
                label="Кв./Офис"
                component={Input}
              />
            </div>
            <Field
              type="text"
              name="comment"
              label="Комментарий"
              component={Input}
            />
            <button type="submit" className="form__button">
              Подтвердить заказ
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
  }
}
export default connect(mapStateToProps, {})(OrderPage)
