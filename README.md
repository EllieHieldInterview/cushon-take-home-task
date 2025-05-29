# Decision Log and Outstanding Questions

## Styling

I decided to use the Mantine Component Library as it is what I have been using most recently. I would implement a theme to customise it to the Cushon style guide.

For this sample app I decided to just use the colours from the cushon logo for inspiration and tried to choose complementary colours. I have only implemented light mode for this task however in reality I would use mantine's in built theme functionality to allow the user to choose between light and dark mode.

I chose to use mantine's inbuilt inline styles rather than separate css files as the styles I wanted for this were sufficiently simple.

## Routing

I have decided not to implement react router as I wanted to focus in on a single user journey however that is how I would choose to expand the app. Other pages I would consider making tickets for are:

- log in page
- detailed account page
- user profile page

etc.

## Testing

I have implemented a couple of simple example e2e tests using playwright

I would consider a test environment so that the tests could safely interact with the back end without changing any real world data

I have used the default github actions pipeline and would expand on this with any other required dependencies

I would consider whether any individual components would be better tested in isolation with react testing library (for example the desposit modal could have the validation tested without the need for the full e2e set up). This would be beneficial as e2e tests can require more overhead to run and could then be kept for realistic user workflows instead of testing every aspect of every component.

## API

I would use different API files to reflect the back end APIs which might be microservices for each function of the bank, for example user service, account service ect. These would then interface with various databases. I would show the user the outcome of API calls and handle any errors which may occur possibly using notifications or by not allowing the user to proceed with a task.
