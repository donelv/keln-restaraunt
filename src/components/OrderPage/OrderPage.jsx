import React from 'react'
import { Formik, Form, Field } from 'formik'
import './OrderPage.css'
import { connect } from 'react-redux'
import Header from '../Header/Header'
const Input = ({ field, form, ...props }) => {
  return (
    <div className="form__group">
      <input className="form__input" spellCheck="false" {...field} required />
      <label className="form__label">{props.label}</label>
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
        {() => (
          <Form className="form">
            <Field type="text" name="name" label="Имя" component={Input} />
            <Field type="text" name="phone" label="Телефон" component={Input} />
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
