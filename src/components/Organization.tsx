"use client";

import {
  GetOrganizationDocument,
  type GetOrganizationQuery,
  type GetOrganizationQueryVariables,
} from "@/gql/__generated__/graphql";
import { useSuspenseQuery } from "@apollo/client";
import React from "react";

const Organization = () => {
  const { data } = useSuspenseQuery<
    GetOrganizationQuery,
    GetOrganizationQueryVariables
  >(GetOrganizationDocument, {
    variables: { login: "ChefDesign" },
  });

  const organization = data?.organization ?? null;

  if (!organization) {
    return <div className="text-sm text-gray-400">No organization found</div>;
  }

  return (
    <div>
      <h2 className="font-bold">{organization.name}</h2>
      <p className="text-sm text-gray-400">
        {organization.description ?? "No description available"}
      </p>
    </div>
  );
};

export default Organization;
