import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import "../popup.css";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const CreateCategory = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const handleSave: SubmitHandler<formData> = (data) => {
    onSave(data);
    onClose();
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-content">
        <form onSubmit={handleSubmit(handleSave)}>
          <h2>Create Category</h2>

          <div className="mb-3">
            <label htmlFor="name" className="from-label">
              Name
            </label>
            <input
              {...register("name")}
              id="name"
              type="text"
              className="form-control"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
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

export default CreateCategory;
