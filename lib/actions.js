"use server";

import pool from "@/lib/db";
import fs from "fs";
import path from "path";

// Add School
export const addSchool = async (formData) => {
  try {
    const name = formData.get("name");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const contact = formData.get("contact");
    const email_id = formData.get("email_id");
    const imageFile = formData.get("image");

    let imagePath = null;
    if (imageFile && imageFile.size > 0) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const uploadDir = path.join(process.cwd(), "public", "schoolImages");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const fileName = Date.now() + "-" + imageFile.name;
      const filePath = path.join(uploadDir, fileName);

      fs.writeFileSync(filePath, buffer);
      imagePath = `/schoolImages/${fileName}`;
    }

    const [result] = await pool.query(
      `INSERT INTO schools (name, address, city, state, contact, image, email_id)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, contact, imagePath, email_id]
    );

    return { success: true, id: result.insertId };
  } catch (err) {
    console.error("Error inserting school:", err);
    return { error: err.message };
  }
};

// Get Schools
export const getSchools = async () => {
  try {
    const [rows] = await pool.query(
      `SELECT id, name, address, city, state, contact, image, email_id
       FROM schools
       ORDER BY id DESC`
    );
    return { success: true, schools: rows };
  } catch (err) {
    console.error("Error fetching schools:", err);
    return { success: false, error: err.message };
  }
};
