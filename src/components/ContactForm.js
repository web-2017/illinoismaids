import React, { useState } from 'react'
import { Grid, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import emailjs from '@emailjs/browser'

import { PHONE, ADDRESS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT_ID, EMAILJS_PUBLIC_KEY } from '../utils/constants'

export default function ContactForm() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')

	const sendEmail = (e) => {
		e.preventDefault()
		if (!email || !phone || !message) {
			return
		} else {
			const fieldsData = {
				name,
				email,
				phone,
				message,
			}

			emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONTACT_ID, fieldsData, EMAILJS_PUBLIC_KEY).then(
				(result) => {
					// console.log('emailjs result', result)
					// console.log('emailjs', result.text)

					if (result.status === 200) {
						setName('')
						setEmail('')
						setPhone('')
						setMessage('')
						alert('Success, See you soon')
					} else {
						alert('Oops, something was wrong! please try again or call me')
					}
				},
				(error) => {
					console.log(error.text)
				}
			)
		}
	}

	return (
		<>
			<Grid container flexDirection='column' alignContent='center' justifyContent='center'>
				<Typography style={{ textAlign: 'center' }} variant='h4'>
					Call me today! {PHONE}
				</Typography>
				<Typography style={{ textAlign: 'center' }} variant='h6'>
					{ADDRESS}
				</Typography>
			</Grid>
			<Grid container sm={12} item={true} justifyContent='center' id='contact'>
				<Grid
					style={{ paddingTop: '50px', paddingBottom: '100px' }}
					container
					justifyContent='center'
					spacing={2}
					md={8}
					item={true}>
					<Grid item={true} xs={12} sm={6} md={6}>
						<TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
					</Grid>
					<Grid item={true} xs={12} sm={6} md={6}>
						<TextField required label='Phone*' value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
					</Grid>
					<Grid item={true} xs={12} sm={6} md={12}>
						<TextField required label='Email*' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
					</Grid>

					<Grid item={true} xs={12}>
						<TextField
							multiline
							rows={4}
							fullWidth
							required
							label='Message*'
							value={message}
							onChange={(e) => {
								// console.log(newValue?.toLocaleTimeString())
								setMessage(e.target.value)
							}}
						/>
					</Grid>
					<Grid style={{ marginTop: '20px' }} container xs={12} item={true} justifyContent='center'>
						<Button onClick={(e) => sendEmail(e)} variant='outlined' color='success'>
							Send
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</>
	)
}
