"use client";

import { isDateString } from "@/app/utils/isDateString";
import { isHexString } from "@/app/utils/isHexString";
import { GetRepoQuery } from "@/gql/graphql";
import { Fragment } from "react";

const ALLOWED_TYPES = ["string", "number", "object"];

type Props = {
  repo: NonNullable<GetRepoQuery["node"]>;
};

export default function RepoForm({ repo }: Props) {
  return (
    <form
      className="flex flex-col gap-4 text-left"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted with values:", {
          ...Object.fromEntries(new FormData(e.currentTarget)),
        });
        return;
      }}
    >
      {Object.entries(repo).map(([key, value]) => {
        return renderField(key, value);
      })}

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-500/50 text-white px-4 py-2 rounded-md transition-colors cursor-pointer"
      >
        Save Changes
      </button>
    </form>
  );
}

function renderField(key: string, value: unknown) {
  if (!value) return false;

  // Skip unsupported types
  if (!ALLOWED_TYPES.includes(typeof value)) {
    console.error(
      `Unsupported type for key "${key}": ${value?.constructor.name}`
    );
    return null;
  }

  if (key === "__typename") {
    return (
      <h1 key={key} className="font-bold text-xl mt-8">
        {String(value)} props
      </h1>
    );
  }

  if (typeof value === "string") {
    if (isHexString(value)) {
      return (
        <div key={key}>
          <label htmlFor={key} className="block text-sm mb-1">
            {key}:
          </label>
          <input type="color" value={value} readOnly name={key} />
        </div>
      );
    }

    if (isDateString(value)) {
      return (
        <div key={key}>
          <label htmlFor={key} className="block text-sm mb-1">
            {key}:
          </label>
          <input
            type="date"
            value={new Date(value).toISOString().slice(0, 10)}
            className="border-1 border-gray-800 px-4 py-3 rounded-md w-full"
            readOnly
            name={key}
          />
        </div>
      );
    }

    return (
      <div key={key}>
        <label htmlFor={key} className="block text-sm mb-1">
          {key}:
        </label>
        <input
          type="text"
          value={value}
          className="border-1 border-gray-800 px-4 py-3 rounded-md w-full"
          readOnly
          name={key}
        />
      </div>
    );
  }

  if (typeof value === "number") {
    return (
      <div key={key}>
        <label htmlFor={key} className="block text-sm mb-1">
          {key}:
        </label>

        <input
          key={key}
          type="number"
          value={value}
          className="border-1 border-gray-800 px-4 py-3 rounded-md w-full"
          readOnly
          name={key}
        />
      </div>
    );
  }

  if (typeof value === "object") {
    return (
      <Fragment key={key}>
        {Object.entries(value).map(([k, v]) => {
          return renderField(k, v);
        })}
      </Fragment>
    );
  }

  return (
    <span key={key} className="italic text-gray-500">
      {String(value)}
    </span>
  );
}
