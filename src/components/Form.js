import React, { useState, useEffect, useRef } from 'react'
import { Box, Grid, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FormControl } from '@mui/material'
import emailjs from '@emailjs/browser'

import { PHONE, ADDRESS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../utils/constants'

export default function ContactUs() {
	const [value, setValue] = useState(null)
	const [time, setTime] = useState(null)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [address, setAddress] = useState('')
	const form = useRef()
	useEffect(() => {
		setTime('')
		setValue('')
	}, [])

	const sendEmail = (e) => {
		e.preventDefault()

		if (!email || !phone || !message) {
			return
		} else {
			const fieldsData = {
				date: value?.toDateString(),
				time: time?.toLocaleTimeString(),
				name,
				email,
				address,
				phone,
				message,
			}

			emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, fieldsData, EMAILJS_PUBLIC_KEY).then(
				(result) => {
					// console.log('emailjs result', result)
					// console.log('emailjs', result.text)

					if (result.status === 200) {
						alert('Success, See you soon')
						setValue(null)
						setName('')
						setEmail('')
						setPhone('')
						setTime(null)
						setMessage('')
						setAddress('')
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
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<FormControl ref={form}>
					<Grid container xs={12} item={true} justifyContent='center'>
						<Grid
							style={{ paddingTop: '50px', paddingBottom: '100px' }}
							container
							justifyContent='center'
							spacing={2}
							md={8}
							item={true}>
							<Grid item sm={12} md={4}>
								<TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
							</Grid>
							<Grid item sm={12} md={4}>
								<TextField required label='Phone*' value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
							</Grid>
							<Grid item sm={12} md={4}>
								<TextField required label='Email*' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
							</Grid>
							<Grid item md={4} sm={12}>
								{/* <div>{value.toLocaleDateString()}</div> */}
								<DatePicker
									label='Choose date'
									value={value}
									onChange={(newValue) => {
										setValue(newValue)
									}}
									renderInput={(params) => <TextField fullWidth {...params} />}
								/>
							</Grid>
							<Grid item sm={12} md={4}>
								<TimePicker
									label='Time'
									value={time}
									onChange={(newValue) => {
										console.log(newValue?.toLocaleTimeString())
										setTime(newValue)
									}}
									renderInput={(params) => <TextField fullWidth {...params} />}
								/>
							</Grid>
							<Grid item sm={12} md={4}>
								<TextField
									required
									label='Address'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									fullWidth
								/>
							</Grid>
							<Grid item sm={12}>
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
							<Grid style={{ marginTop: '20px' }} container sm={12} justifyContent='center'>
								<Button onClick={(e) => sendEmail(e)} variant='outlined'>
									Send
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</FormControl>
			</LocalizationProvider>
		</>
	)
}
