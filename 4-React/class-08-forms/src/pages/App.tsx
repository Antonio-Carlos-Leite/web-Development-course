import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
}

export function App() {
  const { register, handleSubmit, formState:{errors}, reset, watch} = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  }
  console.log(watch("name"));
  console.log("render");
  
  return (
    <>
      <h1>Class 08 Forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
        <label>
          Name: <input type="text" {...register("name", {required: "Campo Obrigatório", minLength:{ value: 3, message:"Minimo de três caracteres"}})} />
        </label>

        <div style={{fontSize: 15, color:"red", position: 'relative'}}>
          {errors.name?.message}
        </div>
        </section>

        <br />

        <section>
        <label>
          Email: <input type="email" {...register("email", {required: "Campo Obrigatório", pattern: {value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Endereço de Email inválido",},
})} />
        </label>

        <div style={{fontSize: 15, color:"red", position: 'relative'}}>
          {errors.email?.message}
        </div>
        </section>
        
        <br />
      
        <div>
          <button>Submit</button>
        </div>

      </form>
    </>
  );
}
