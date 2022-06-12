import React from "react";

function CompanyDomainInput(props) {
  const { companyDomain, handleCompanyDomainChange } = props;

  return (
    <>
      <div id="company-domain">
      <span className="options-label">Enter Company Domain </span>
        <input
          type="text"
          value={companyDomain}
          onChange={handleCompanyDomainChange}
          data-testid="input-testid"
        />
      </div>
    </>
  );
}

export default CompanyDomainInput;