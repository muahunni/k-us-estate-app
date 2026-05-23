"use client";

import React, { useState } from "react";

export default function Home() {
  const [budgetUSD, setBudgetUSD] = useState<number>(1500000);
  const [exchangeRate, setExchangeRate] = useState<number>(1380);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [targetCity, setTargetRegion] = useState<string>("LA-Orange County");
  const [leadCreated, setLeadCreated] = useState<boolean>(false);

  const purchasePriceKRW = budgetUSD * exchangeRate;
  const requiresBoKReport = budgetUSD > 1000000;
  const estimatedFIRPTA_Withholding = budgetUSD * 0.15;

  const handleCalculateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("⚠️ 고객님, 모든 정보를 정확히 입력해주세요! 이름, 이메일, 전화번호는 필수 입력 항목입니다.");
      return;
    }
    setLeadCreated(true);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC", color: "#0F172A", fontFamily: "sans-serif" }}>
      <header style={{ borderBottom: "1px solid #E2E8F0", backgroundColor: "white", padding: "15px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "4px", backgroundColor: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "14px" }}>
              KR
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "20px", letterSpacing: "-0.02em", display: "block" }}>K-US Real Estate Corridor</span>
              <span style={{ fontSize: "10px", color: "#475569", fontWeight: "bold", textTransform: "uppercase" }}>National Gateway</span>
            </div>
          </div>
        </div>
      </header>

      <div style={{ backgroundColor: "#0F172A", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "bold", padding: "5px 12px", borderRadius: "4px", backgroundColor: "rgba(37, 99, 235, 0.2)", color: "#3B82F6", border: "1px solid rgba(37, 99, 235, 0.3)", marginBottom: "15px" }}>
            📈 한미 부동산 투자 & 교환 전문가 그룹
          </span>
          <h1 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "15px", lineHeight: "1.25" }}>
            🇺🇸 한미 부동산 투자는 <br />
            🇺🇸 가장 빠르게 K-US 부동산 코리더와 함께!
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "16px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            전문가의 도움으로 성공적인 한미 부동산 투자를 시작하세요. 100% 한글 상담으로 언어의 장벽 없이 VIP 전용 맞춤형 서비스를 제공합니다.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", borderBottom: "1px solid #E2E8F0", paddingBottom: "15px" }}>
                💰 미국 부동산 구매 예산 및 환율
              </h2>

              <div style={{ marginBottom: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "14px", marginBottom: "10px" }}>
                  <span>🇺🇸 미국 구매 예산 (USD)</span>
                  <span style={{ color: "#2563EB", fontSize: "18px" }}>${budgetUSD.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={300000}
                  max={15000000}
                  step={100000}
                  value={budgetUSD}
                  onChange={(e) => setBudgetUSD(Number(e.target.value))}
                  style={{ width: "100%", height: "8px", backgroundColor: "#E2E8F0", borderRadius: "4px", cursor: "pointer", outline: "none" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#475569", marginTop: "5px" }}>
                  <span>$30만 (최소 구매 예산)</span>
                  <span>$1,500만 (최대 구매 예산)</span>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "25px" }}>
                <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "15px" }}>
                  <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>총 구매 가격 (KRW)</span>
                  <span style={{ fontSize: "20px", fontWeight: "900", color: "#0F172A" }}>
                    ₩{purchasePriceKRW.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <span style={{ fontSize: "10px", color: "#475569", display: "block", marginTop: "5px" }}>
                    환율 적용: $1 / ₩{exchangeRate} (한국 금융기관 시세)
                  </span>
                </div>

                <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "15px" }}>
                  <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>예상 FIRPTA (원천징수)</span>
                  <span style={{ fontSize: "20px", fontWeight: "900", color: "#2563EB" }}>
                    ${estimatedFIRPTA_Withholding.toLocaleString()}
                  </span>
                  <span style={{ fontSize: "10px", color: "#475569", display: "block", marginTop: "5px" }}>
                    🇺🇸 미국 정부 원천징수 (FIRPTA): 15% (매각 시 적용)
                  </span>
                </div>
              </div>

              {requiresBoKReport && (
                <div style={{ padding: "15px", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", color: "#78350F", borderRadius: "8px", display: "flex", gap: "10px", marginBottom: "25px" }}>
                  <span style={{ fontSize: "20px" }}>💡</span>
                  <div style={{ fontSize: "12px" }}>
                    <span style={{ fontWeight: "bold", display: "block", marginBottom: "2px" }}>🇺🇸 한미 부동산 거래 시 외환신고 의무</span>
                    <p style={{ margin: 0, color: "#475569", lineHeight: "1.5" }}>
                      해외 부동산 취득 또는 처분 시 한국 은행에 외환신고 의무가 발생할 수 있습니다. 자세한 요율 조정법 등은 1:1 상담을 지향합니다.
                    </p>
                  </div>
                </div>
              )}

              {!leadCreated ? (
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "25px" }}>
                  <span style={{ fontSize: "18px", fontWeight: "bold", display: "block", marginBottom: "4px" }}>1:1 한미 부동산 전문가 상담</span>
                  <p style={{ fontSize: "12px", color: "#475569", marginBottom: "20px" }}>🇺🇸 지금 바로 신청하고 VIP 혜택으로 맞춤형 보고서 (PDF)를 무료로 받아보세요.</p>

                  <form onSubmit={handleCalculateAndSubmit} style={{ display: "grid", gap: "15px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                      <div>
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>이름과 성</label>
                        <input
                          type="text"
                          placeholder="홍길동"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>이메일 주소</label>
                        <input
                          type="email"
                          placeholder="vip@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                          required
                        />
                      </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                      <div>
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>전화번호</label>
                        <input
                          type="tel"
                          placeholder="010-1234-5678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>관심 지역</label>
                        <select
                          value={targetCity}
                          onChange={(e) => setTargetRegion(e.target.value)}
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", backgroundColor: "white", boxSizing: "border-box" }}
                        >
                          <option value="LA-Orange County">캘리포니아 / 오렌지 카운티</option>
                          <option value="New York-Manhattan">뉴욕 / 맨해튼</option>
                          <option value="Hawaii-Honolulu">하와이 / 호놀룰루</option>
                          <option value="Seattle">시애틀 / 워싱턴</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      style={{ width: "100%", backgroundColor: "#2563EB", border: "none", color: "white", fontWeight: "bold", padding: "14px", fontSize: "14px", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}
                    >
                      🚀 미국 부동산 구매 견적 및 상담 신청 (VIP 전용)
                    </button>
                  </form>
                </div>
              ) : (
                <div style={{ backgroundColor: "#15803D", color: "white", borderRadius: "8px", padding: "30px", textAlign: "center", marginTop: "20px" }}>
                  <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>✅</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>🎉 축하합니다! 성공적으로 상담이 접수되었습니다!</h3>
                  <p style={{ fontSize: "14px", color: "#F0FDF4", lineHeight: "1.6", margin: "0 0 15px 0" }}>
                    고객님의 <strong>{email}</strong>로 맞춤형 PDF 보고서를 발송했습니다.
                  </p>
                  <button
                    onClick={() => setLeadCreated(false)}
                    style={{ backgroundColor: "white", border: "none", color: "#15803D", fontWeight: "bold", padding: "8px 16px", borderRadius: "4px", fontSize: "12px", cursor: "pointer" }}
                  >
                    ⬅️ 다시 계산하기
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "30px 20px", textAlign: "center", color: "#475569", fontSize: "12px", backgroundColor: "white", marginTop: "80px" }}>
        <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Licensed under cross-border real estate referral network systems.</p>
        <p style={{ margin: 0, color: "#94A3B8" }}>© 2026 K-US Real Estate Corridor Network. All rights reserved.</p>
      </footer>
    </div>
  );
}
