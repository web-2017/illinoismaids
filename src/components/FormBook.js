import React, { useState, useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FormControl } from '@mui/material'
import emailjs from '@emailjs/browser'

import { PHONE, ADDRESS, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../utils/constants'
import { BookBtn } from './BookBtn'

export default function FormBook() {
	const [value, setValue] = useState(null)
	const [time, setTime] = useState(null)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')
	const [address, setAddress] = useState('')
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		if (!email || !phone || !message || !value || !time) {
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
					if (result.status === 200) {
						setValue(null)
						setName('')
						setEmail('')
						setPhone('')
						setTime(null)
						setMessage('')
						setAddress('')
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
		<Box display='flex' flexDirection={'column'} justifyContent='center' alignItems='center' minHeight='100vh'>
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
					<Grid container item={true} sm={12} justifyContent='center'>
						<Grid
							style={{ paddingTop: '50px', paddingBottom: '100px' }}
							container
							justifyContent='center'
							spacing={2}
							item={true}
							md={8}>
							<Grid item={true} xs={12} sm={6} md={4}>
								<TextField label='Name' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
							</Grid>
							<Grid item={true} xs={12} sm={6} md={4}>
								<TextField required label='Phone*' value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
							</Grid>
							<Grid item={true} xs={12} sm={6} md={4}>
								<TextField required label='Email*' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
							</Grid>
							<Grid item={true} md={4} xs={12} sm={6}>
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
							<Grid item={true} xs={12} sm={6} md={4}>
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
							<Grid item={true} xs={12} sm={6} md={4}>
								<TextField
									required
									label='Address'
									value={address}
									onChange={(e) => setAddress(e.target.value)}
									fullWidth
								/>
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
							<Grid style={{ marginTop: '20px' }} container item={true} xs={12} justifyContent='center'>
								<BookBtn onClick={(e) => sendEmail(e)}>Send</BookBtn>
							</Grid>
						</Grid>
					</Grid>
				</FormControl>
			</LocalizationProvider>
		</Box>
	)
}
