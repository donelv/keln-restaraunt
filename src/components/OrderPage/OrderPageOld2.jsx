import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import './OrderPage.css'
import { connect } from 'react-redux'
import Header from '../Header/Header'
const Input = ({ field, form, ...props }) => {
  // console.log(props)
  return (
    <div className="form__group">
      <input
        type={props.type}
        className="form__input"
        spellCheck="false"
        {...field}
        required
        placeholder={props.placeHolder}
        maxLength={props.maxLength}
        value={props.inpValue}
        onChange={props.handleChange}
      />
      <label className="form__label">{props.label}</label>
    </div>
  )
}
const OrderPage = (props) => {
  // useEffect(() => {
  //   let phoneInputs = document.querySelectorAll('input[name="phone"]')
  //   for (var i = 0; i < phoneInputs.length; i++) {
  //     let input = phoneInputs[i]
  //     input.addEventListener('input', testInputListener)
  //     // input.addEventListener('keydown', onPhoneKeyDown)
  //     // input.addEventListener('paste', onPhonePaste)
  //   }
  // }, [])
  let [inputValue, setInputValue] = useState('')

  // const onPhoneKeyDownNJ = (e) => {
  //   let inputValue = e.target.value.replace(/\D/g, '')
  //   if (e.keyCode == 8 && inputValue.length == 1) {
  //     e.target.value = ''
  //   }
  // }
  // const onPhoneInputNJ = (e) => {
  //   let input = e.target,
  //     inputNumbersValue = getInputNumbersValue(input),
  //     formattedInputValue = '',
  //     selectionStart = input.selectionStart
  //   if (!inputNumbersValue) {
  //     return (input.value = '')
  //   }
  //   if (input.value.length != selectionStart) {
  //     if (e.data && /\D/g.test(e.data)) {
  //       input.value = inputNumbersValue
  //     }
  //     return
  //     // console.log('редактирование в середине строки', e)
  //   }
  //   if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
  //     if (inputNumbersValue[0] == '9') {
  //       inputNumbersValue = '7' + inputNumbersValue
  //     }
  //     let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7'
  //     formattedInputValue = input.value = firstSymbols + ' '
  //     if (inputNumbersValue.length > 1) {
  //       formattedInputValue += '(' + inputNumbersValue.substring(1, 4)
  //     }
  //     if (inputNumbersValue.length >= 5) {
  //       formattedInputValue += ') ' + inputNumbersValue.substring(4, 7)
  //     }
  //     if (inputNumbersValue.length >= 8) {
  //       formattedInputValue += '-' + inputNumbersValue.substring(7, 9)
  //     }
  //     if (inputNumbersValue.length >= 10) {
  //       formattedInputValue += '-' + inputNumbersValue.substring(9, 11)
  //     }
  //     //Russian number
  //   } else {
  //     formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
  //     // Not Russian number
  //   }
  //   console.log(formattedInputValue)
  //   // input.value = formattedInputValue //Инпут полностью очищается здесь, скорее всего делается с использованием useState
  //   input.value = formattedInputValue
  //   // console.log(input.value)
  //   // console.log(inputNumbersValue)
  // }
  // const onPhonePasteNJ = (e) => {
  //   let pasted = e.clipboardData || window.clipboardData,
  //     input = e.target,
  //     inputNumbersValue = getInputNumbersValue(input)
  //   if (pasted) {
  //     let pastedText = pasted.getData('Text')
  //     if (/\D/g.test(pastedText)) {
  //       input.value = inputNumbersValue
  //       return
  //     }
  //   }
  // }

  const getInputNumbersValue = (input) => {
    return input.replace(/\D/g, '')
  }
  const onPhonePaste = (e) => {
    let pasted = e.clipboardData || window.clipboardData,
      valueFromTarget = e.target.value,
      inputNumbersValue = getInputNumbersValue(valueFromTarget)
    if (pasted) {
      let pastedText = pasted.getData('Text')
      if (/\D/g.test(pastedText)) {
        setInputValue(inputNumbersValue)
        return
      }
    }
  }
  const onPhoneInput = (e) => {
    let valueFromTarget = e.target.value,
      formattedInputValue = '',
      selectionStart = e.target.selectionStart
    console.log(selectionStart)
    let inputNumbersValue = getInputNumbersValue(valueFromTarget)
    if (!inputNumbersValue) {
      return setInputValue('')
    }
    // if (e.target.value.length != selectionStart) {
    //   console.log('редактирование в середине строки', e.nativeEvent)
    //   //   // if (e.data && /\D/g.test(e.data)) {
    //   //   //   console.log('зашел в if')
    //   //   //   //   //     setInputValue(inputNumbersValue)
    //   //   //   //   //     // input.value = inputNumbersValue
    //   //   // }
    //   return
    //   //   //   //
    // }
    if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == '9') {
        inputNumbersValue = '7' + inputNumbersValue
      }
      let firstSymbols = inputNumbersValue[0] == '8' ? '8' : '+7'
      formattedInputValue = inputValue = firstSymbols + ' '
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
    setInputValue(formattedInputValue)
    // console.log(inputValue)
  }
  const onPhoneKeyDown = (e) => {
    // let inputValue = e.target.value.replace(/\D/g, '')
    // if (e.keyCode == 8 && inputValue.length == 1) {
    //   e.target.value = ''
    // }
    let targetValue = e.target.value.replace(/\D/g, '')
    // setInputValue(inputValue.replace(/\D/g, ''))
    if (e.keyCode == 8 && targetValue.length == 1) {
      setInputValue('')
    }
  }
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
        {() => (
          <Form className="form">
            <Field type="text" name="name" label="Имя" component={Input} />
            <Field name="phone">
              {({ field }) => (
                <div className="form__group">
                  <input
                    type="tel"
                    className="form__input"
                    spellCheck="false"
                    required
                    maxLength="18"
                    value={inputValue}
                    onChange={onPhoneInput}
                    onKeyDown={onPhoneKeyDown}
                    onPaste={onPhonePaste}
                  />
                  <label className="form__label">Телефон</label>
                </div>
              )}
            </Field>

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
