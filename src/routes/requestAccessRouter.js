import express from 'express'
import { submitRequestAccess } from '../controllers/requestAccessControllers.js'

const router = express.Router()

router.post('/request-access', submitRequestAccess)

export default router