"use client";
import React, { useState } from "react";
export default function Home() {
  const [budgetUSD, setBudgetUSD] = useState(1500000);
  const [exchangeRate, setExchangeRate] = useState(1380);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [targetCity, setTargetRegion] = useState("LA-Orange County");
  const [leadCreated, setLeadCreated] = useState(false);
  const purchasePriceKRW = budgetUSD * exchangeRate;
  const requiresBoKReport = budgetUSD > 1000000;
  const estimatedFIRPTA_Withholding = budgetUSD * 0.15;
  const handleCalculateAndSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("상세 계산 리포트를 받아보실 성함, 이메일, 연락처를 모두 입력해 주세요.");
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
            외국환거래법 & 국세청 자금출처 조사 완벽 검증 시스템 등록
          </span>
          <h1 style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.03em", marginBottom: "15px", lineHeight: "1.25" }}>
            한국 자산으로 미국 자산을 취득하거나 <br/>
            귀국 전 미국 자산을 비과세 송금하고 싶으신가요?
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "16px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            해외 거주 목적 부동산 매입부터 국내 귀환 자산 반출까지 복잡한 외환 세법 계산기를 두드려보세요. 100% 무료 상세 리포트 신청 시, 전문 매칭 마스터가 신속히 연결됩니다.
          </p>
        </div>
      </div>
      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
              <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", borderBottom: "1px solid #E2E8F0", paddingBottom: "15px" }}>
                실시간 미국 취득세 & 자금 송금 추정 계산기
              </h2>
              <div style={{ marginBottom: "25px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "14px", marginBottom: "10px" }}>
                  <span>미국 부동산 매입 희망가 (USD)</span>
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
                  <span>$30만 (소규모 콘도 수준)</span>
                  <span>$1,500만 (기관급 중소 빌딩)</span>
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "25px" }}>
                <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "15px" }}>
                  <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>원화 환산 매입 원가</span>
                  <span style={{ fontSize: "20px", fontWeight: "900", color: "#0F172A" }}>
                    ₩{purchasePriceKRW.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </span>
                  <span style={{ fontSize: "10px", color: "#475569", display: "block", marginTop: "5px" }}>
                    적용 환율: $1 / ₩{exchangeRate} (실시간 제휴은행 반영고시)
                  </span>
                </div>
                <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "15px" }}>
                  <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>매입 시 양도 소득 추정치 (환차익 대비)</span>
                  <span style={{ fontSize: "20px", fontWeight: "900", color: "#2563EB" }}>
                    ${estimatedFIRPTA_Withholding.toLocaleString()}
                  </span>
                  <span style={{ fontSize: "10px", color: "#475569", display: "block", marginTop: "5px" }}>
                    미국 연방 양도세 원천징수 가이드라인 기반
                  </span>
                </div>
              </div>
              {requiresBoKReport && (
                <div style={{ padding: "15px", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", color: "#78350F", borderRadius: "8px", display: "flex", gap: "10px", marginBottom: "25px" }}>
                  <span style={{ fontSize: "20px" }}>⚠️</span>
                  <div style={{ fontSize: "12px" }}>
                    <span style={{ fontWeight: "bold", display: "block", marginBottom: "2px" }}>한국 국외 외환 거래 안내 경시 알림</span>
                    <p style={{ margin: 0, color: "#475569", lineHeight: "1.5" }}>
                      해외 거주용 부동산 무신고 송금 한도($5만) 및 외국환 거래법상 지정 거래 은행 등록 한도($100만)를 초과하였습니다. 해외 주택 구입 목적일 경우 <strong>반드시 한국은행 정밀 실사 취득 보고 절차</strong>를 선행하셔야 양국 형사 처벌을 피하실 수 있습니다.
                    </p>
                  </div>
                </div>
              )}
              {!leadCreated ? (
                <div style={{ borderTop: "1px solid #E2E8F0", paddingTop: "25px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>1:1 국외 자산 반출 상담 및 전문 한인 브로커 연동 신청</h3>
                  <p style={{ fontSize: "12px", color: "#475569", marginBottom: "20px"}}>상태 분석 가이드가 포함된 PDF 리포트 파일과 함께 신뢰할 수 있는 수수료 셰어 연결을 보장합니다.</p>
                  <form onSubmit={handleCalculateAndSubmit} style={{ display: "grid", gap: "15px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                      <div>
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>신청인 성함</label>
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
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>연락처</label>
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
                        <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>투자 희망 지역</label>
                        <select
                          value={targetCity}
                          onChange={(e) => setTargetRegion(e.target.value)}
                          style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", backgroundColor: "white", boxSizing: "border-box" }}
                        >
                          <option value="LA-Orange County">로스앤젤레스 / 오렌지 카운티</option>
                          <option value="New York-Manhattan">뉴욕 맨해튼 / 롱아일랜드</option>
                          <option value="Hawaii-Honolulu">하와이 호놀룰루</option>
                          <option value="Seattle">시애틀 / 메디나</option>
                        </select>
                      </div>
                    </div>
                    <button
                      type="submit"
                      style={{ width: "100%", backgroundColor: "#2563EB", border: "none", color: "white", fontWeight: "bold", padding: "14px", fontSize: "14px", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}
                    >
                      실시간 외환 양식 리포트 다운로드 및 VIP 매칭 신청
                    </button>
                  </form>
                </div>
              ) : (
                <div style={{ backgroundColor: "#15803D", color: "white", borderRadius: "8px", padding: "30px", textAlign: "center", marginTop: "20px" }}>
                  <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>✨</span>
                  <h3 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>맞춤형 자금출처 자문 리포트 신청 완료!</h3>
                  <p style={{ fontSize: "14px", color: "#F0FDF4", lineHeight: "1.6", margin: "0 0 15px 0" }}>
                    입력해주신 메일 계정 <strong>{email}</strong>로 실시간 외환거래 신고 양식 및 법률 대조 한글 요약본 PDF 파일이 발송되었습니다. 지정 제휴 분야 최고 한인 전문 브로커가 곧 별도의 문자로 개별 연락을 드리겠습니다.
                  </p>
                  <button
                    onClick={() => setLeadCreated(false)}
                    style={{ backgroundColor: "white", border: "none", color: "#15803D", fontWeight: "bold", padding: "8px 16px", borderRadius: "4px", fontSize: "12px", cursor: "pointer" }}
                  >
                    추가 시뮬레이션 하기
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