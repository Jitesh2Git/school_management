"use client";

import { useRef } from "react";
import { addSchool } from "@/lib/actions";
import { useForm } from "react-hook-form";
import { GraduationCap, Loader2 } from "lucide-react";
import { schoolFormValidation } from "@/lib/validations";
import toast from "react-hot-toast";
import FormInput from "@/components/FormInput";
import FileUpload from "@/components/FileUpload";
import FormSection from "@/components/FormSection";

const AddSchoolPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const fileResetRef = useRef(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "image" && data.image[0]) {
          formData.append("image", data.image[0]);
        } else {
          formData.append(key, data[key]);
        }
      });

      const res = await addSchool(formData);

      if (res.success) {
        toast.success("School added successfully!");
        reset();
        fileResetRef.current?.();
      } else {
        toast.error(`Error: ${res.error}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <GraduationCap className="mx-auto h-12 w-12 text-primary stroke-[1.2]" />
          <h2 className="text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
            Add New School
          </h2>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="mt-12"
        >
          <div className="space-y-12">
            <FormSection
              title="School Information"
              description="Basic details about the educational institution."
            >
              <div className="col-span-full">
                <FormInput
                  label="School Name"
                  id="name"
                  placeholder="Enter full name of the school"
                  registerProps={register("name", schoolFormValidation.name)}
                  error={errors.name}
                />
              </div>

              <FileUpload
                label="School Image"
                id="image"
                accept=".jpg,.jpeg,.png,.webp,.avif"
                registerProps={register("image", schoolFormValidation.image)}
                error={errors.image}
                onReset={fileResetRef}
              />
            </FormSection>

            <FormSection
              title="Location Details"
              description="Physical address and location information for the school."
            >
              <div className="col-span-full">
                <FormInput
                  label="Street Address"
                  id="address"
                  placeholder="Enter street address"
                  registerProps={register(
                    "address",
                    schoolFormValidation.address
                  )}
                  error={errors.address}
                />
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <FormInput
                  label="City"
                  id="city"
                  placeholder="Enter city"
                  registerProps={register("city", schoolFormValidation.city)}
                  error={errors.city}
                />
              </div>

              <div className="sm:col-span-2">
                <FormInput
                  label="State"
                  id="state"
                  placeholder="Enter state"
                  registerProps={register("state", schoolFormValidation.state)}
                  error={errors.state}
                />
              </div>
            </FormSection>

            <FormSection
              title="Contact Information"
              description="How can people get in touch with this school?"
              showBorder={false}
            >
              <div className="sm:col-span-3">
                <FormInput
                  label="Phone Number"
                  id="contact"
                  placeholder="Enter phone number"
                  registerProps={register(
                    "contact",
                    schoolFormValidation.contact
                  )}
                  error={errors.contact}
                />
              </div>

              <div className="sm:col-span-3">
                <FormInput
                  label="Email Address"
                  id="email_id"
                  type="email"
                  placeholder="Enter email address"
                  registerProps={register(
                    "email_id",
                    schoolFormValidation.email_id
                  )}
                  error={errors.email_id}
                />
              </div>
            </FormSection>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              onClick={() => {
                reset();
                fileResetRef.current?.();
              }}
              disabled={isSubmitting}
              className="text-sm/6 font-semibold text-copy cursor-pointer"
            >
              Clear Form
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-content 
              disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <p className="flex items-center gap-2">
                  <Loader2 className="animate-spin" />
                  Adding School
                </p>
              ) : (
                "Add School"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSchoolPage;
