import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../popup.css";

const schema = z.object({
  number: z
    .string()
    .min(3, { message: "Number must be atleast 3 characters." }),
  location: z
    .string()
    .min(5, { message: "location must be atleaast 5 characters" }),
  size: z.string().min(3, { message: "size must be atleast 3 charaters" }),
  isOccupied: z
    .string()
    .refine((val) => val === "true" || val === "false", {
      message: "Please select True or False",
    })
    .transform((val) => val === "true"),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const AddStallComponent = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const handleSave: SubmitHandler<formData> = (CreateProduct) => {
    console.log(CreateProduct);
    onSave(CreateProduct);
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create products</h2>

          <div className="mb-3">
            <label htmlFor="number" className="from-label">
              number
            </label>
            <input
              {...register("number")}
              id="number"
              type="text"
              className="form-control"
            />
            {errors.number && (
              <p className="text-danger">{errors.number.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="from-label">
              location
            </label>
            <input
              {...register("location")}
              id="location"
              type="text"
              className="form-control"
            />
            {errors.location && (
              <p className="text-danger">{errors.location.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="size" className="from-label">
              size
            </label>
            <input
              {...register("size")}
              id="size"
              type="text"
              className="form-control"
            />
            {errors.size && (
              <p className="text-danger">{errors.size.message}</p>
            )}
          </div>
          {/* <div className="mb-3">
            <label htmlFor="isOccupied" className="from-label">
              isOccupied
            </label>
            <input
              {...register("isOccupied")}
              id="isOccupied"
              type="text"
              className="form-control"
            />
            {errors.isOccupied && (
              <p className="text-danger">{errors.isOccupied.message}</p>
            )}
          </div> */}

          <div className="mb-3">
            <label htmlFor="gender" className="from-label">
              isOccupied
            </label>
            <select className="form-select" {...register("isOccupied")}>
              <option value="">Select isOccupied</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            {errors.isOccupied && (
              <p className="text-danger">{errors.isOccupied.message}</p>
            )}
          </div>

          <div className="d-flex justify-content-between">
            <Button
              marginRight="40x"
              fontSize="xl"
              colorScheme="blue"
              type="submit"
            >
              save
            </Button>
            <Button
              fontSize="xl"
              colorScheme="blue"
              className="close-button"
              onClick={() => onClose()}
            >
              close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStallComponent;
