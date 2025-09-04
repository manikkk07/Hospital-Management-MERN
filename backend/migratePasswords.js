import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/UserSchema.js';
import Doctor from './models/DoctorSchema.js';

dotenv.config();

const migratePasswords = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');

    // Migrate User passwords
    const users = await User.find({});
    for (let user of users) {
      if (!user.password.startsWith('$2')) {
        console.log(`Hashing password for user: ${user.email}`);
        user.password = await bcrypt.hash(user.password, 12);
        await user.save();
      }
    }

    // Migrate Doctor passwords
    const doctors = await Doctor.find({});
    for (let doctor of doctors) {
      if (!doctor.password.startsWith('$2')) {
        console.log(`Hashing password for doctor: ${doctor.email}`);
        doctor.password = await bcrypt.hash(doctor.password, 12);
        await doctor.save();
      }
    }

    console.log('Password migration completed');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migratePasswords();