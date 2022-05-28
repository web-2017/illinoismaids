import React, { useState, useRef } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { TextField, Link } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { FormControl } from '@mui/material'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
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
	const [open, setOpen] = useState(false)
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()

		if (!email || !phone || !message || !value || !time) {
			setOpen(true)
			return
		} else {
			setOpen(false)
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
					Call me today!
				</Typography>
				<Typography component={Link} href={`tel:${PHONE}`} style={{ textAlign: 'center' }} variant='h4'>
					{PHONE}
				</Typography>
				<Typography style={{ textAlign: 'center' }} variant='h6'>
					{ADDRESS}
				</Typography>
			</Grid>
			{open && (
				<Stack sx={{ width: '100%' }} spacing={2}>
					<Alert
						severity='error'
						action={
							<IconButton
								aria-label='close'
								color='inherit'
								size='small'
								onClick={() => {
									setOpen(false)
								}}>
								<CloseIcon fontSize='inherit' />
							</IconButton>
						}>
						<AlertTitle>Error</AlertTitle>
						All fields are required — <strong>check it out!</strong>
					</Alert>
				</Stack>
			)}
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
								<TextField required label='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} fullWidth />
							</Grid>
							<Grid item={true} xs={12} sm={6} md={4}>
								<TextField required label='Email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
							</Grid>
							<Grid item={true} md={4} xs={12} sm={6}>
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
									label='Message'
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
