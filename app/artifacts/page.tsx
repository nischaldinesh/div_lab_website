import React from "react";
import Image from "next/image";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";

const ArtifactsPage = () => {
  return (
    <main className="main-content mx-8 my-4 rounded-xl bg-neutral-100 px-10 py-10 shadow-sm border border-neutral-200">
      <section className="artifacts-section">
        {/* Legend */}
        <div className="artifacts-legend flex flex-wrap gap-4 mb-6">
          {[
            { src: "/artifacts/data-collection.png", name: "Data" },
            { src: "/artifacts/demo.png", name: "Demo" },
            { src: "/artifacts/dashboard.png", name: "Interface" },
            { src: "/artifacts/comments.png", name: "Talk" },
          ].map((item) => (
            <div
              key={item.name}
              className="legend-item flex items-center gap-2"
            >
              <Image
                src={item.src}
                alt={`${item.name} Icon`}
                width={44}
                height={44}
                className="legend-icon"
              />
              <span className="legend-name text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Artifact Grid */}
        <div className="artifacts-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact.title}
              className="artifact-card border rounded-lg p-4 shadow-sm hover:shadow-md transition bg-white"
            >
              <h3 className="artifact-title text-lg font-semibold mb-3">
                {artifact.title}
              </h3>
              <div className="artifact-resources flex gap-3 flex-wrap">
                {artifact.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    className="resource-link"
                  >
                    <Image
                      src={link.icon}
                      alt={link.alt}
                      width={28}
                      height={28}
                      className="resource-icon"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ArtifactsPage;
