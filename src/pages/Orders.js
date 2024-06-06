import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import axios from "axios";

const Orders = () => {
  const navigate = useNavigate();
  const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8 -mx-8 px-4 py-8 lg:py-12`;
  const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;

  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);
  const colorName = {
    "#FFFFFF": "White",
    "#000": "Black",
    "#ffb900": "Yellow",
    "#0000ff": "Blue",
    "#00ff00": "Green",
    "#ffb900": "Orange",
  };
  const getOrdersByUserID = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/order/${user.user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setOrders(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("ORDER", orders);

  useEffect(() => {
    getOrdersByUserID();
  }, []);

  return (
    <AnimationRevealPage>
      <Header className="mb-8" />
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0"></h2>
      <Container>
        <Content>
          <div className="my-8 z-0">
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
                Orders History
              </h2>
            </div>
            <div className="w-full items-center flex flex-col">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <div className="rounded-xl bg-white mb-4 p-4 justify-center w-5/6">
                    <div
                      key={order.id}
                      className="flex justify-between items-center border-b py-4"
                    >
                      <div>
                        <h3 className="text-lg font-semibold ">
                          Order ID: {order.id} <br /> <br />
                        </h3>
                        <p>
                          {" "}
                          <b>Status:</b> Sedang Dikirim
                        </p>

                        <p>
                          <b>Metode Pembayaran:</b> {order.payment}
                        </p>
                        <div>
                          {order.orderItems &&
                            order.orderItems.map((item) => {
                              console.log(item);
                              return (
                                <ul>
                                  <li key={item.productId}>
                                    <b>Produk:</b> {item.product.name}
                                  </li>

                                  <li>
                                    <b>Total:</b> {item.quantity}
                                  </li>

                                  <li>
                                    <b>Warna:</b> {colorName[item.color]}
                                  </li>

                                  <li>
                                    <b>Alamat:</b> {order.address},{" "}
                                    {order.postalCode}, {order.country}
                                  </li>
                                </ul>
                              );
                            })}
                        </div>
                      </div>

                      <div>
                        {order.orderItems &&
                          order.orderItems.map((item) => {
                            console.log(item);
                            return (
                              <div className="">
                                <img
                                  className="w-60"
                                  src={item.product.image}
                                  alt={item.product.name}
                                />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-lg">Yuk Belanja Dahulu!</p>
              )}
            </div>
          </div>
        </Content>
      </Container>

      <Footer background="bg-white" />
    </AnimationRevealPage>
  );
};

export default Orders;
