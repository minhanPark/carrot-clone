import useMutation from "@libs/client/useMutation";
import { Stream } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

interface CreateForm {
  name: string;
  price: string;
  description: string;
}

interface CreateResponse {
  ok: boolean;
  stream: Stream;
}

const Create: NextPage = () => {
  const router = useRouter();
  const [createStream, { loading, data }] =
    useMutation<CreateResponse>("/api/streams");
  const { register, handleSubmit } = useForm<CreateForm>();
  const onVaild = (formData: CreateForm) => {
    if (loading) return;
    createStream(formData);
  };
  useEffect(() => {
    if (data && data.ok) {
      router.push(`/live/${data.stream.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack title="Go Live">
      <form onSubmit={handleSubmit(onVaild)} className=" space-y-4 py-10 px-4">
        <Input
          required
          label="Name"
          name="name"
          type="text"
          register={register("name", { required: true })}
        />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
          register={register("price", { required: true, valueAsNumber: true })}
        />
        <TextArea
          name="description"
          label="Description"
          register={register("description", { required: true })}
        />
        <Button text="Go live" />
      </form>
    </Layout>
  );
};

export default Create;
