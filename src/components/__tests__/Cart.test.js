import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended(20)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(
    screen.getByText("Cart is empty. Add items to the Cart")
  ).toBeInTheDocument();
});