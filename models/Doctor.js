import mongoose, { Mongoose } from "mongoose";

const Schema = mongoose.Schema

const doctorSchema = new Schema ({
    doctorId: {
        type: String,
        required: [true, 'DoctorId is required']
    },
    nome: {
        type: String,
        required: [true, 'Doctor name is required']
    },
    login: {
        type: String,
        required: [true, 'Login is requered'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is requered'],
    },
    medicalSpecialty: {
        type: String,
        required: [true, 'Medical Specialty is required']
    },
    medicalRegistration: {
        type: String,
        required: [true, 'Medical Registration is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is requered'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is requered'],
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

const doctor = mongoose.model('Doctor', doctorSchema)

export default doctor