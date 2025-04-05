import { Button } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import useCategories from "../../hooks/useCategory";
import "../popup.css";
import useStall from "../../hooks/useStall";

const schema = z.object({
  price: z.number({ invalid_type_error: "price field is required" }),
  name: z.string().min(3, { message: "Name must be atleast 3 characters." }),
  image: z
    .string()
    .min(10, { message: "image url must be atleaast 10 characters" }),
  quantity: z.number({ invalid_type_error: "quantity field is required" }),
  categoryId: z.number({ invalid_type_error: "category id field is required" }),
  stallId: z.number({ invalid_type_error: "stall id field is required" }),
});

export type formData = z.infer<typeof schema>;

interface Props {
  onClose: () => void;
  onSave: (data: formData) => void;
}

const CreateProduct = ({ onClose, onSave }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });
  const { data } = useCategories();
  const { data: stalls } = useStall();

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
          <div className="mb-3">
            <label htmlFor="price" className="from-label">
              Price
            </label>
            <input
              {...register("price", { valueAsNumber: true })}
              id="price"
              type="number"
              className="form-control"
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="from-label">
              Quantity
            </label>
            <input
              {...register("quantity", { valueAsNumber: true })}
              id="quantity"
              type="number"
              className="form-control"
            />
            {errors.quantity && (
              <p className="text-danger">{errors.quantity.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="from-label">
              Image Url
            </label>
            <input
              {...register("image")}
              id="image"
              type="text"
              className="form-control"
            />
            {errors.image && (
              <p className="text-danger">{errors.image.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="categoryId" className="from-label">
              Category
            </label>
            <select
              className="form-select"
              {...register("categoryId", { valueAsNumber: true })}
            >
              <option value="">Select category</option>
              {data.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-danger">{errors.categoryId.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="stallId" className="from-label">
              Stall
            </label>
            <select
              className="form-select"
              {...register("stallId", { valueAsNumber: true })}
            >
              <option value="">select stall</option>
              {stalls.map((stall) => (
                <option key={stall.id} value={stall.id}>
                  {stall.number}
                </option>
              ))}
            </select>
            {errors.stallId && (
              <p className="text-danger">{errors.stallId.message}</p>
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

export default CreateProduct;
