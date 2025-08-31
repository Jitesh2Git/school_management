export const schoolFormValidation = {
  name: { required: "School name is required" },
  address: { required: "Address is required" },
  city: { required: "City is required" },
  state: { required: "State is required" },
  contact: {
    required: "Contact number is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Contact must be a valid 10-digit number",
    },
  },
  email_id: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format",
    },
  },
  image: {
    required: "Image is required",
    validate: {
      maxSize: (files) => {
        if (!files || files.length === 0) return "Image is required";
        const file = files[0];
        return file.size <= 10 * 1024 * 1024 || "Image must be <= 10MB";
      },
      fileType: (files) => {
        if (!files || files.length === 0) return true;
        const file = files[0];
        const allowedTypes = [
          "image/jpeg",
          "image/png",
          "image/webp",
          "image/avif",
        ];
        return (
          allowedTypes.includes(file.type) ||
          "Only JPG, PNG, WEBP, AVIF allowed"
        );
      },
    },
  },
};
