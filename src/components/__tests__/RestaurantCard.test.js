import { render, screen } from "@testing-library/react";
import RestaurantCard , {withVegPromoted} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"; 

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Gayathri Coffee Kendra");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
  
   // Render the wrapped component using the HOC
   const RestaurantCardVegPromoted = withVegPromoted(RestaurantCard);

   // Mock data to pass as props
   render(<RestaurantCardVegPromoted resData={MOCK_DATA} />);
 
   // Check if the "Good" label is rendered
   const label = screen.getByText("Good");
   expect(label).toBeInTheDocument();
   
   // Additionally, check if the RestaurantCard's name is still rendered correctly
   const name = screen.getByText("Gayathri Coffee Kendra");
   expect(name).toBeInTheDocument();
});