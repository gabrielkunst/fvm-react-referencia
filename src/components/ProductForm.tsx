import { z } from "zod";
import { ModalTitle } from "./ModalTitle";
import { Product } from "@/models/Product";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";
import { InputErrorMessage } from "./InputErrorMessage";
import { Textarea } from "./Textarea";
import { Button } from "./Button";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
	name: z.string().min(3, "Nome muito curto").max(255, "Nome muito longo"),
	description: z
		.string()
		.min(3, "Descrição muito curta")
		.max(255, "Descrição muito longa"),
	priceInCents: z
		.string()
		.min(1, "Preço é obrigatório")
		.refine(
			(value) => !isNaN(Number(value)) || Number(value) < 0.01,
			"Preço inválido"
		),
	image: z.string().url("URL inválida"),
});

type FormSchema = z.infer<typeof formSchema>;

interface ProductFormProps {
	defaultValues?: Product;
	onFormSubmit: (data: FormSchema) => Promise<void>;
}

export function ProductForm({ defaultValues, onFormSubmit }: ProductFormProps) {
	const [isLoading, setIsLoading] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...defaultValues,
			priceInCents: defaultValues?.priceInCents.toString(),
		},
	});
	const isProductEdit = !!defaultValues;

	const onSubmit: SubmitHandler<FormSchema> = async (data) => {
		try {
			setIsLoading(true);
			await onFormSubmit(data);
			toast.success(
				isProductEdit
					? "Produto editado com sucesso"
					: "Produto criado com sucesso"
			);
		} catch (error) {
			console.error(error);
			toast.error("Erro ao criar produto");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<ModalTitle>
				{isProductEdit ? "Editar Produto" : "Criar Produto"}
			</ModalTitle>
			<div className="flex flex-col w-full gap-2">
				<div>
					<Input
						placeholder="Nome"
						register={register("name")}
						type="text"
						disabled={isLoading}
						isError={!!errors.name}
					/>
					{errors.name && (
						<InputErrorMessage>
							{errors.name.message}
						</InputErrorMessage>
					)}
				</div>
				<div>
					<Textarea
						placeholder="Descrição"
						register={register("description")}
						disabled={isLoading}
						isError={!!errors.description}
					/>
					{errors.description && (
						<InputErrorMessage>
							{errors.description.message}
						</InputErrorMessage>
					)}
				</div>
				<div>
					<Input
						placeholder="Preço"
						type="number"
						register={register("priceInCents")}
						disabled={isLoading}
						isError={!!errors.priceInCents}
					/>
					{errors.priceInCents && (
						<InputErrorMessage>
							{errors.priceInCents.message}
						</InputErrorMessage>
					)}
				</div>
				<div>
					<Input
						placeholder="Imagem"
						type="text"
						register={register("image")}
						disabled={isLoading}
						isError={!!errors.image}
					/>
					{errors.image && (
						<InputErrorMessage>
							{errors.image.message}
						</InputErrorMessage>
					)}
				</div>
			</div>
			<Button
				isLoading={isLoading}
				className="mx-auto mt-5 py-2 min-w-[150px]"
			>
				{isProductEdit ? "Editar" : "Criar"}
			</Button>
		</form>
	);
}
