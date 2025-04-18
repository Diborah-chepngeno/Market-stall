import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { matchedData } from "express-validator";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  const { username, password, email, phone, address, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: {
        role: "Admin",
        username,
        password: hashedPassword,
        email,
        phone,
        address,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24hr" });
    res.json({ message: "Login successful", token, user: user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userId = parseInt(id);

    // Delete all bookings associated with the user
    await prisma.booking.deleteMany({
      where: { vendorId: userId },
    });

    // Now delete the user
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
