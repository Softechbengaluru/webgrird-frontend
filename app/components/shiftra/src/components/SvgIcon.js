"use client";
import React, { useState, useMemo } from "react";
import { STRAPI_BASE_URL } from "../utils/url";
import Image from "next/image";

const SVGIcon = ({ src, size = 24, zoomOut, className = "", title = "", onClick, header = false, product }) => {
  const [imageUrl, setImageUrl] = useState("");
  const finalSize = zoomOut ? size * zoomOut : size;
  const headers = header ? { "ngrok-skip-browser-warning": "true" } : {};

  const resolvedSrc = useMemo(() => {
    let url = typeof src === "string" ? src : product?.image?.[0]?.url || "";
    return url.startsWith("/uploads") ? `${STRAPI_BASE_URL}${url}` : url;
  }, [src, product]);

  useMemo(() => {
    if (resolvedSrc && !resolvedSrc.startsWith("blob:")) {
      fetch(resolvedSrc, { headers })
        .then(response => response.blob())
        .then(blob => setImageUrl(URL.createObjectURL(blob)))
        .catch(error => console.error("Error loading image:", error));
    }
  }, [resolvedSrc]);

  return (
    <img
      src={imageUrl || resolvedSrc}
      width={finalSize}
      height={finalSize}
      className={className}
      alt={title}
      title={title}
      onClick={onClick}
      {...(header && { fetchpriority: "high" })}
    />
  );
};

export default SVGIcon;
