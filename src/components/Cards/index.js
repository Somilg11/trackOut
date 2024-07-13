import React from 'react'
import "./styles.css"
import { Card, Row } from 'antd'
import Button from "../Button"

function Cards({income, expense, totalBalance, showExpenseModal, showIncomeModal}) {
  return (
    <div>
      <Row className='my-row'>
        <Card className='my-card'>
          <h2>Current Balance</h2>
          <p>₹{totalBalance}</p>
          <Button text="Reset Balance" blue="true"/>
        </Card>
        <Card className='my-card'>
          <h2>Total Income</h2>
          <p>₹{income}</p>
          <Button onClick={showIncomeModal} text="Add Income" blue="true"/>
        </Card>
        <Card className='my-card'>
          <h2>Total Expenses</h2>
          <p>₹{expense}</p>
          <Button onClick={showExpenseModal} text="Add Expense" blue="true"/>
        </Card>
      </Row>
    </div>
  )
}

export default Cards