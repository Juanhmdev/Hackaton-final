import { useState } from 'react';
import "./Forms.css";
import { motion } from "framer-motion";

export default function Formulario() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
        formData.append("subject", "New Submission from Web3Forms");
        formData.append("botcheck", "");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (


        <motion.div className="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4.4 }}>
            <div className="container mx-auto flex">
                <div>
                    <img className='img-formulario' src="/src/assets/formulario-removebg-preview (2).png" alt="" />
                </div>
                <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                            Formulario
                        </h1>
                        <p className="text-gray-400 dark:text-gray-400">
                            Solicita más información, llenando el formulario.
                        </p>
                    </div>
                    <div className="m-7">
                        <form onSubmit={onSubmit} id="form">
                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
                            <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Nombre completo</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required className="input-style" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Correo Eléctronico</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" required className="input-style" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Número de celular</label>
                                <input type="text" name="phone" id="phone" placeholder="+51 182 121 121" required className="input-style" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Comentario</label>

                                <textarea rows="5" name="message" id="message" placeholder="Mensaje" className="textarea-style" required></textarea>
                            </div>
                            <div className="mb-7">
                                <button type="submit" className="button-style">
                                    Enviar
                                </button>
                            </div>
                            <p className="text-base text-center text-gray-400" id="result">{result}</p>
                        </form>
                    </div>

                </div>

            </div>

        </motion.div>
    );
}