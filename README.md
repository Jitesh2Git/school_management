# School Listings Web Application

## 🌐 Live Demo

**Deployed URL:** [https://school-listings.netlify.app](https://school-listings.netlify.app)

> **Note:** The live deployment shows the frontend interface only. Database functionality (add/show schools) is demonstrated in the video below as free MySQL hosting services are limited for deployment.

## 📹 Demo Video

_The demo video showcases:_

- Adding new schools with form validation
- Image upload functionality
- Responsive design on both desktop and mobile
- School listings display
- Complete database operations running locally

## ✨ Features

### Add School Page

- **Comprehensive Form**: Built with `react-hook-form` for optimal performance
- **Input Validation**:
  - Email format validation
  - Required field validation
  - Contact number validation
- **Image Upload**: Stores school images in `schoolImages` folder
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Toast Notifications**: User feedback with `react-hot-toast`

### Show Schools Page

- **E-commerce Style Grid**: Displays schools similar to product listings
- **School Information**: Shows name, address, city, and school image
- **Responsive Layout**: Adaptive grid system for all screen sizes

## 🛠️ Tech Stack

- **Framework**: Next.js
- **Database**: MySQL
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Icons**: Lucide React

## 📋 Database Schema

### Schools Table

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    contact BIGINT NOT NULL,
    image TEXT NOT NULL,
    email_id TEXT NOT NULL
);
```

## 🚀 Local Development Setup

### Prerequisites

- Node.js (v18 or higher)
- MySQL Server
- npm or yarn

### Installation Steps

1. **Clone the repository**

   ```bash
   cd school-listings
   git clone https://github.com/Jitesh2Git/school_management .
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Database Setup**

   ```bash
   # Create MySQL database
   mysql -u root -p
   CREATE DATABASE school_db;
   USE school_db;

   # Create schools table (use schema above)
   ```

4. **Environment Configuration**

   Create a `.env.local` file in the root directory:

   ```env
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   DB_PORT=
   ```

5. **Create Image Directory**

   ```bash
   mkdir public/schoolImages
   ```

6. **Run the application**

   ```bash
   npm run dev
   ```

7. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Navigate to `/addSchool` to add new schools
   - Navigate to `/showSchools` to view all schools

## 🔧 API Endpoints

### POST `/api/schools`

Add a new school to the database

```json
{
  "name": "School Name",
  "address": "School Address",
  "city": "City Name",
  "state": "State Name",
  "contact": "1234567890",
  "email_id": "school@example.com",
  "image": "image_filename.jpg"
}
```

### GET `/api/schools`

Retrieve all schools from the database

```json
[
  {
    "id": 1,
    "name": "School Name",
    "address": "School Address",
    "city": "City Name",
    "state": "State Name",
    "contact": "1234567890",
    "email_id": "school@example.com",
    "image": "image_filename.jpg"
  }
]
```
