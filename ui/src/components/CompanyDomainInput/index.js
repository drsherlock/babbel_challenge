import React from "react";

function CompanyDomainInput(props) {
  const { companyDomain, handleCompanyDomainChange } = props;

  return (
    <>
      <div>
        <span>Enter Company Domain </span>
        <input
          type="text"
          value={companyDomain}
          onChange={handleCompanyDomainChange}
          data-testid="company-domain-testid"
        />
      </div>
    </>
  );
}

export default CompanyDomainInput;
