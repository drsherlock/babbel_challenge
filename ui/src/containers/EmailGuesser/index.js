import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CompanyDomainInput from "../../components/CompanyDomainInput";
import FullNameInput from "../../components/FullNameInput";
import GuessButton from "../../components/GuessButton";
import EmailGuess from "../../components/EmailGuess";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

import { getEmailGuess } from "../../actions";

function EmailGuesser(props) {
  const { loading, emailGuess, getEmailGuess, error } = props;
  const [fullName, setFullName] = useState("");
  const [companyDomain, setCompanyDomain] = useState("");

  const handleFullNameChange = (e) => setFullName(e.target.value);

  const handleCompanyDomainChange = (e) => setCompanyDomain(e.target.value);

  const handleGuessClick = () => {
    if (!fullName || fullName.split(" ").length < 2) {
      alert("Please provide correct full name");
      return;
    }

    if (!companyDomain || companyDomain.split(".").length < 2) {
      alert("Please provide correct company domain");
      return;
    }

    getEmailGuess({ fullName, companyDomain });
  };

  return (
    <>
      <h4>Email Guesser</h4>
      <FullNameInput
        fullName={fullName}
        handleFullNameChange={handleFullNameChange}
      />
      <br />
      <CompanyDomainInput
        companyDomain={companyDomain}
        handleCompanyDomainChange={handleCompanyDomainChange}
      />
      <br />
      <GuessButton handleGuessClick={handleGuessClick} />
      <br />
      {loading === false ? <EmailGuess emailGuess={emailGuess} /> : <Loader />}
      <Error error={error} />
    </>
  );
}

EmailGuesser.propTypes = {
  loading: PropTypes.bool.isRequired,
  emailGuess: PropTypes.object.isRequired,
  getEmailGuess: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    emailGuess: state.emailGuesses.emailGuess,
    loading: state.emailGuesses.loading,
    error: state.emailGuesses.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEmailGuess: (request) => {
      dispatch(getEmailGuess(request));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmailGuesser);
