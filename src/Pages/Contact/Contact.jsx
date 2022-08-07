import React from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import marker from "../../images/marker.svg";
import L from "leaflet";
import "./contact.scss";

function Contact() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  const position = [42.87334780243159, 74.58757181102123];
  const icon = L.icon({
    iconUrl: marker,
    iconAnchor: position,
    iconSize: [55, 55],
  });
  return (
    <section className="contact">
      <h1>Our Contact</h1>
      <div className="container contact__container">
        <div className="contact__col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Your Name
              <input
                placeholder="Gulshan Osmonalieva"
                {...register("name", {
                  reguired: "Имя должно быть заполнено!",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
            <label>
              Your Email
              <input
                placeholder="gulshan.osmonalieva.kk@gmail.com"
                {...register("email", {
                  reguired: "Email должны быть заполнено",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите корректный email!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <label>
              Your Message
              <textarea
                {...register("msg", {
                  maxLength: {
                    value: 10,
                    message: "Максимум 10 символов",
                  },
                })}
              ></textarea>
            </label>
            <div className="contact__error">
              {errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
          </form>
        </div>

        <div className="contact__col">
          <MapContainer center={position} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={position} icon={icon}>
              <Popup>пр Манаса-Токтогула</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
