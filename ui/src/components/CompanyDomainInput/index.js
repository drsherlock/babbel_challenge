import React from "react";

function CompanyDomainInput(props) {
  const { companyDomain, handleCompanyDomainChange } = props;

  return (
    <div>
      <input
        type="text"
        placeholder="Company Domain"
        value={companyDomain}
        onChange={handleCompanyDomainChange}
        data-testid="company-domain-testid"
      />
    </div>
  );
}

export default CompanyDomainInput;
