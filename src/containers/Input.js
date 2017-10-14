import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Input = () =>
  <div>
    <TextField fieldName="searchInput" searchInputDisabled="true"/>
    <Button btnName="searchButton" btnDisabled="false" />
  </div>

export default Input
