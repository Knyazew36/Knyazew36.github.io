import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TextBottom from "../Text/TextBottom";

const Basket = () => {
  const services = useSelector((state) => state.basket);
  const [discount, setDiscount] = useState("");

  const [totalAmount, setTotalAmount] = useState(0);
  const [discoutnSum, setDiscountSum] = useState("");
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    totalAmountHandler();
  }, [services, discount]);

  const inputOnChangeHandler = (value) => {
    setDiscount(value);
  };
  const totalAmountHandler = () => {
    let sum = services.reduce((acc, item) => acc + item.value * item.price, 0);
    setFullPrice(sum);
    setDiscountSum((sum / 100) * discount);
    setTotalAmount(sum - (sum / 100) * discount);
  };

  return (
    <div className="w-[20%] h-full basket print:w-auto print:h-auto">
      <div className="px-2 py-6 fixed basket right-0 bottom-0 top-24 flex w-[16%] flex-col justify-between basket-gradient print:w-full print:justify-start print:static print:px-2">
        <p className="text-xl font-bold print:hidden">Выбранные услуги:</p>
        <p className="text-xl font-bold print:block hidden mb-8 text-center">
          Предварительный план лечения и стоимость услуг в рублях:
        </p>
        <div className="overflow-y-auto h-[70%] print:h-auto ">
          <ol className="px-0 flex flex-col gap-2 max-w-7xl print:gap-2.5">
            {services.map((item, index) => (
              <li
                className="flex gap-2 px-1 print:px-0 print:w-full print:justify-between print:border-b-2"
                key={index}
              >
                <p className="w-[80%]"> {item.description}</p>
                <p className=" shrink-0 w-12 text-bold">{item.value} ед.</p>
                <p className=" shrink-0 w-[18%] text-bold hidden print:block text-end">
                  Цена: {item.price} руб.
                </p>
              </li>
            ))}
          </ol>
        </div>
        {discount && (
          <>
            <p className="text-xl font-bold print:text-end">
              Первоначальная цена: {fullPrice} руб.
            </p>
            <p className="text-xl font-bold print:text-end">
              Ваша скидка: {discoutnSum} руб.
            </p>
          </>
        )}
        <p className="text-xl font-bold print:text-end">
          Общая сумма с учетом скидки: {totalAmount} руб.
        </p>
        <div className="flex flex-col gap-2 print-hidden print:hidden">
          <button
            type="button"
            className="btn btn-success "
            onClick={() => window.print()}
          >
            Печать
          </button>
          <div className="w-full">
            <button
              type="button"
              onClick={() => setDiscount(!discount)}
              className="btn btn-info w-full"
            >
              Скидка
            </button>
            {discount && (
              <div className="mt-2 flex gap-2">
                <input
                  type="number"
                  className="input-group-text w-full"
                  value={discount}
                  min={0}
                  max={50}
                  onChange={(e) => {
                    inputOnChangeHandler(e.target.value);
                  }}
                />
              </div>
            )}
          </div>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="btn btn-secondary"
            type="button"
          >
            Очистить полностью
          </button>
        </div>
        <TextBottom />
      </div>
    </div>
  );
};

export default Basket;
