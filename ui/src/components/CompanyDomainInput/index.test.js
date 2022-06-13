import { render, fireEvent } from "@testing-library/react";

import CompanyDomainInput from "./";

test("renders CompanyDomainInput", () => {
  const companyDomain = "";
  const handleCompanyDomainChange = jest.fn(() => {});

  const { getByPlaceholderText } = render(
    <CompanyDomainInput
      companyDomain={companyDomain}
      handleCompanyDomainChange={handleCompanyDomainChange}
    />
  );

  expect(getByPlaceholderText("Company Domain")).toBeInTheDocument();
});

test("updates on input change", () => {
  let companyDomain = "";
  const handleCompanyDomainChange = jest.fn((e) => {
    companyDomain = e.target.value;
  });

  const { getByTestId } = render(
    <CompanyDomainInput
      companyDomain={companyDomain}
      handleCompanyDomainChange={handleCompanyDomainChange}
    />
  );
  const inputElement = getByTestId("company-domain-testid");
  const newCompanyDomain = "new company domian";
  fireEvent.change(inputElement, { target: { value: newCompanyDomain } });

  expect(handleCompanyDomainChange).toHaveBeenCalledTimes(1);
  expect(companyDomain).toBe(newCompanyDomain);
});
