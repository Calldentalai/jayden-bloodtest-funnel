import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Comprehensive Blood Test - 100+ Biomarkers Analyzed by Certified Functional Medicine Practitioner Jayden Pileggi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a2e1a 0%, #0f1f0f 50%, #1a2e1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(74, 124, 89, 0.3)",
            border: "1px solid rgba(74, 124, 89, 0.5)",
            borderRadius: "30px",
            padding: "8px 24px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#4A7C59",
              display: "flex",
            }}
          />
          <span style={{ color: "#7cb88a", fontSize: "18px", fontWeight: 500 }}>
            Certified Functional Medicine Practitioner
          </span>
        </div>

        {/* Main heading */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
            }}
          >
            Comprehensive Blood Test
          </span>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 600,
              color: "#4A7C59",
              lineHeight: 1.2,
            }}
          >
            100+ Biomarkers Analyzed
          </span>
        </div>

        {/* Subtitle */}
        <span
          style={{
            fontSize: "20px",
            color: "#94a3b8",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Optimal ranges, not just &quot;normal&quot; — Personal consultation included
        </span>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#4A7C59" }}>2,500+</span>
            <span style={{ fontSize: "14px", color: "#94a3b8" }}>Tests Delivered</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#4A7C59" }}>4.9/5</span>
            <span style={{ fontSize: "14px", color: "#94a3b8" }}>Client Rating</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "32px", fontWeight: 700, color: "#4A7C59" }}>15+</span>
            <span style={{ fontSize: "14px", color: "#94a3b8" }}>Countries</span>
          </div>
        </div>

        {/* Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "30px",
            borderTop: "1px solid rgba(148, 163, 184, 0.2)",
            paddingTop: "20px",
          }}
        >
          <span style={{ fontSize: "18px", color: "white", fontWeight: 600 }}>
            Jayden Pileggi
          </span>
          <span style={{ fontSize: "16px", color: "#94a3b8" }}>
            | Functional Medicine
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
