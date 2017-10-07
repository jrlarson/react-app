import React, { Component } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'

const Input = () =>
  <div>
    <TextField fieldName="searchInput" searchInputEnabled="true"/>
    <Button btnName="searchButton" btnEnabled="true" />
  </div>

export default Input
