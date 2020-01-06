import React, { useState } from "react";
import Form from "../Form";
import useForm from "../Form/hooks/useForm";
import axios from "axios";

const Container = props => <div className="container" {...props} />;
const Row = props => <div className="row" {...props} />;
const Masthead = props => <Row className="m-auto p-5" {...props} />;
const Title = props => (
  // TODO: THROW ERROR || WARN IF NO CHILDREN
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <h1 className="text-white text-center padding-lg" {...props} />
);
const ContentBox = ({ className, ...restProps }) => (
  <div
    className={className || "col-sm-5 bg-light my-2 mx-auto"}
    {...restProps}
  />
);
const PlaceholderText = props => (
  // TODO: THROW ERROR || WARN IF NO CHILDREN
  // eslint-disable-next-line jsx-a11y/heading-has-content
  <span
    className="font-italic small"
    {...props}
    style={{ color: "lightgray" }}
  />
);
const App = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const makeRequest = () => {
    return axios({
      method: inputs.method,
      url: inputs.url
    })
      .then(res => setSuccess({ response: res }))
      .catch(err => setError({ errors: err.response }));
  };
  const { inputs, handleChange, handleSubmit } = useForm(makeRequest);

  return (
    <Container>
      <Masthead>
        <Title>Welcome one and all!</Title>
        <blockquote className="alert alert-secondary text-center">
          <p>
            {" "}
            This is a relatively pointless interface, built to demonstrate the
            features of Cypress E2E Testing in Javascript. <br />
            But <strong> pointless ≠ worthless</strong>!
          </p>
          Run{" "}
          <span className="bg-light display-inline font-monospace">
            <code style={{ color: "black" }}>yarn test:cypress</code>
          </span>{" "}
          from your CLI to get to the good stuff.
        </blockquote>
      </Masthead>
      <Row>
        <div className="bg-light mx-auto my-4">
          <div className="text-center">
            <hr style={{ borderBottom: "2px dashed gray" }} />
            <p className="lead">Sample URLS</p>
            Random Hogwarts House:{" "}
            <code>`https://www.potterapi.com/v1/sortingHat`</code>
            <br />
            Random Dog Photo Src:{" "}
            <code>`https://dog.ceo/api/breeds/image/random`</code>
            <hr style={{ borderBottom: "2px dashed gray" }} />
          </div>
          <Form
            inputs={inputs}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </Row>
      <Row>
        <ContentBox
          data-name="currently-active"
          className={`mx-auto col-sm-11 bg-light`}
          style={{
            minHeight: "200px",
            borderTop: "4px solid grey"
          }}
        >
          {inputs ? (
            <pre>{JSON.stringify(inputs, null, 2)}</pre>
          ) : (
            <PlaceholderText>
              Currently active things will announce themselves here.
            </PlaceholderText>
          )}
        </ContentBox>
        <ContentBox
          data-name="success"
          style={{ minHeight: "200px", borderTop: "4px solid green" }}
        >
          {success ? (
            <span><pre>{JSON.stringify(success, null, 2)}</pre></span>
          ) : (
            <PlaceholderText>
              Successful things will announce themselves here.
            </PlaceholderText>
          )}
        </ContentBox>
        <ContentBox
          data-name="failiure"
          style={{ minHeight: "200px", borderTop: "4px solid red" }}
        >
          {error ? (
            <pre>{JSON.stringify(error, null, 2)}</pre>
          ) : (
            <PlaceholderText>
              Failed things will announce themselves here.
            </PlaceholderText>
          )}
        </ContentBox>
      </Row>
      <footer style={{ minHeight: "100px" }} />
    </Container>
  );
};

// App.propTypes = {
//   children: PropTypes.oneOfType([
//     PropTypes.arrayOf(PropTypes.node),
//     PropTypes.node
//   ]).isRequired
// };

export default App;
