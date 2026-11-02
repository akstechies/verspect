import { ImageResponse } from "next/og";

export const alt =
  "Verspect dependency intelligence: understand dependency health, security risk, and upgrade impact before shipping.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 68px",
          position: "relative",
          overflow: "hidden",
          color: "#F5F8FC",
          background:
            "linear-gradient(125deg, #07111F 0%, #0B1A2A 58%, #092B32 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-250px",
            right: "-170px",
            width: "720px",
            height: "720px",
            borderRadius: "50%",
            border: "1px solid rgba(80, 224, 205, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-175px",
            right: "-95px",
            width: "570px",
            height: "570px",
            borderRadius: "50%",
            border: "1px solid rgba(80, 224, 205, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-390px",
            left: "410px",
            width: "760px",
            height: "760px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(32, 180, 166, 0.16) 0%, rgba(32, 180, 166, 0) 80%)",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "14px",
                color: "#06151D",
                background: "#66E5D2",
                fontSize: "26px",
                fontWeight: 800,
              }}
            >
              V
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "27px",
                fontWeight: 800,
                letterSpacing: "2px",
              }}
            >
              VERSPECT
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 16px",
              border: "1px solid rgba(102, 229, 210, 0.38)",
              borderRadius: "999px",
              color: "#9BEBDD",
              fontSize: "13px",
              letterSpacing: "1.8px",
              fontWeight: 700,
            }}
          >
            DEPENDENCY INTELLIGENCE
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            flex: 1,
            paddingTop: "42px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "710px",
              gap: "22px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "67px",
                lineHeight: 1.06,
                fontWeight: 800,
                letterSpacing: "-2.5px",
              }}
            >
              <div>Know every upgrade</div>
              <div style={{ color: "#66E5D2" }}>before you ship it.</div>
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: "650px",
                color: "#B7C7D5",
                fontSize: "24px",
                lineHeight: 1.42,
              }}
            >
              Understand dependencies, surface risk, and assess upgrade impact before release.
            </div>
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              {["Dependency health", "Security signals", "Upgrade impact"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      padding: "10px 13px",
                      borderRadius: "8px",
                      border: "1px solid rgba(190, 215, 224, 0.2)",
                      color: "#D9E6EE",
                      fontSize: "15px",
                    }}
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            style={{
              width: "260px",
              height: "280px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "22px",
              borderRadius: "20px",
              border: "1px solid rgba(130, 200, 205, 0.25)",
              background: "rgba(13, 37, 50, 0.82)",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#8FAEBD",
                fontSize: "12px",
                letterSpacing: "1.4px",
                fontWeight: 700,
              }}
            >
              DEPENDENCY MAP
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "150px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "120px",
                  height: "1px",
                  background: "rgba(102, 229, 210, 0.6)",
                  transform: "rotate(-28deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "116px",
                  height: "1px",
                  background: "rgba(102, 229, 210, 0.6)",
                  transform: "rotate(28deg)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "4px",
                  top: "15px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "2px solid #66E5D2",
                  background: "#123849",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  right: "4px",
                  top: "15px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "2px solid #66E5D2",
                  background: "#123849",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "4px",
                  bottom: "12px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  border: "2px solid #66E5D2",
                  background: "#123849",
                }}
              />
              <div
                style={{
                  width: "82px",
                  height: "82px",
                  borderRadius: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#071B25",
                  background: "#66E5D2",
                  fontWeight: 800,
                  fontSize: "24px",
                  zIndex: 1,
                }}
              >
                PKG
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                color: "#9FB7C3",
                fontSize: "13px",
              }}
            >
              <div>Packages</div>
              <div style={{ color: "#66E5D2" }}>Connected</div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "18px",
            borderTop: "1px solid rgba(190, 215, 224, 0.18)",
            color: "#91A8B7",
            fontSize: "16px",
            zIndex: 1,
          }}
        >
          <div>Evidence-led dependency decisions for engineering teams.</div>
          <div style={{ color: "#A9EFE4", fontWeight: 700 }}>
            verspect.akstechies.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
