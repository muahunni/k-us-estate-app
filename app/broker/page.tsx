"use client";
import React, { useState } from "react";
interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  targetBudget: number;
  targetRegion: string;
  status: "new" | "assigned" | "under_escrow" | "closed" | "lost";
}
export default function BrokerPortal() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [brokerName, setBrokerName] = useState("");
  const [brokerEmail, setBrokerEmail] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [brokerageName, setBrokerageName] = useState("");
  const [operatingRegion, setOperatingRegion] = useState("California-LA");
  const [leads, setLeads] = useState([
    {
      id: "1",
      fullName: "김우진",
      email: "woojin.kim@naver.com",
      phone: "+82-10-9876-5432",
      targetBudget: 2400000,
      targetRegion: "California-LA",
      status: "new",
    },
    {
      id: "2",
      fullName: "이정은 (유학생 부모)",
      email: "jeoungeun@daum.net",
      phone: "+82-10-5555-4444",
      targetBudget: 1200000,
      targetRegion: "New York-Manhattan",
      status: "assigned",
    },
    {
      id: "3",
      fullName: "James Park (귀환 한인)",
      email: "james.p@gmail.com",
      phone: "+1-213-911-0000",
      targetBudget: 4500000,
      targetRegion: "Hawaii-Honolulu",
      status: "under_escrow",
    }
  ]);
  const handleRegisterBroker = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brokerName || !brokerEmail || !licenseNumber || !brokerageName) {
      alert("파트너 중개사 가입을 위해 모든 정보를 누락없이 기입해 주세요.");
      return;
    }
    setIsRegistered(true);
  };
  const handleUpdateStatus = (leadId: string, newStatus: string) => {
    setLeads(prev =>
      prev.map(l => (l.id === leadId ? { ...l, status: newStatus as any } : l))
    );
  };
  const calculateReferralOwed = (budget: number) => {
    const commission = budget * 0.03;
    const referralFee = commission * 0.30;
    return referralFee;
  };
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC", color: "#0F172A", fontFamily: "sans-serif" }}>
      <header style={{ borderBottom: "1px solid #E2E8F0", backgroundColor: "white", padding: "15px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "4px", backgroundColor: "#2563EB", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "14px" }}>
              B2B
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "18px", letterSpacing: "-0.02em", display: "block" }}>K-US Broker Gateway</span>
              <span style={{ fontSize: "10px", color: "#475569", fontWeight: "bold", textTransform: "uppercase" }}>Referral & License Verification</span>
            </div>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold" }}>상호 정산 표준 요율: 30% 수수료 분할 준수</span>
          </div>
        </div>
      </header>
      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
        {!isRegistered ? (
          <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "10px" }}>미국/한국 파트너 공인중개사 네트워크 가입</h2>
            <p style={{ fontSize: "13px", color: "#475569", marginBottom: "25px", lineHeight: "1.5" }}>
              본 연동 게이트웨이는 수천 명의 한국 고자산 이민 예정자, 유학생 가족, 국외 자산 처분 귀환자들의 매수 리드를 전용으로 배정받을 수 있는 파트너 중개망입니다. 미국 세법(RESPA) 및 면허법 규정을 엄격히 준수합니다.
            </p>
            <form onSubmit={handleRegisterBroker} style={{ display: "grid", gap: "15px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>에이전트 실명 (영문/한글)</label>
                <input
                  type="text"
                  placeholder="Sarah Park"
                  value={brokerName}
                  onChange={(e) => setBrokerName(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>중개업소 공식 이메일</label>
                <input
                  type="email"
                  placeholder="sarahpark@kw.com"
                  value={brokerEmail}
                  onChange={(e) => setBrokerEmail(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                  required
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                <div>
                  <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>부동산 중개 라이센스 번호</label>
                  <input
                    type="text"
                    placeholder="DRE# 02145678"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                    required
                  />
                </div>
                <div>
                  <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>중개법인 상호명</label>
                  <input
                    type="text"
                    placeholder="Keller Williams LA"
                    value={brokerageName}
                    onChange={(e) => setBrokerageName(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", boxSizing: "border-box" }}
                    required
                  />
                </div>
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>주요 활동 관할 도시</label>
                <select
                  value={operatingRegion}
                  onChange={(e) => setOperatingRegion(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "14px", backgroundColor: "white", boxSizing: "border-box" }}
                >
                  <option value="California-LA">캘리포니아 (LA, 오렌지카운티)</option>
                  <option value="New York-Manhattan">뉴욕 맨해튼 / 뉴저지</option>
                  <option value="Hawaii-Honolulu">하와이 호놀룰루</option>
                  <option value="Seattle">워싱턴 시애틀</option>
                  <option value="Seoul-Gangnam">서울 강남 / 서초 / 한남</option>
                </select>
              </div>
              <div style={{ margin: "10px 0", fontSize: "11px", color: "#475569" }}>
                <input type="checkbox" id="terms" defaultChecked required style={{ marginRight: "5px" }} />
                <label htmlFor="terms">자산 매수/매도 실 계약 완료 증명 즉시 수수료 분할 동의서 및 제휴 계약 수칙에 서명합니다.</label>
              </div>
              <button
                type="submit"
                style={{ width: "100%", backgroundColor: "#0F172A", border: "none", color: "white", fontWeight: "bold", padding: "14px", fontSize: "14px", borderRadius: "6px", cursor: "pointer" }}
              >
                네트워크 파트너 공증 가입 및 수수료 매칭 계약서 전자서명
              </button>
            </form>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div style={{ backgroundColor: "#0F172A", color: "white", padding: "20px", borderRadius: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
              <div>
                <span style={{ fontSize: "12px", color: "#2563EB", fontWeight: "bold", display: "block" }}>PARTNER ACCOUNT ACTIVE</span>
                <span style={{ fontSize: "20px", fontWeight: "bold" }}>{brokerName} ({brokerageName})</span>
              </div>
              <div style={{ borderLeft: "2px solid #1E293B", paddingLeft: "20px" }}>
                <span style={{ fontSize: "11px", color: "#94A3B8", display: "block" }}>매칭 검증 지역</span>
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>{operatingRegion} Area</span>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "15px" }}>배정 내역 및 양국 이송 진행 현황</h3>
              <div style={{ display: "grid", gap: "15px" }}>
                {leads.map(lead => (
                  <div key={lead.id} style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
                    <div style={{ minWidth: "250px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "5px" }}>
                        <span style={{ fontWeight: "bold", fontSize: "16px" }}>{lead.fullName} 고객</span>
                        <span style={{ fontSize: "11px", backgroundColor: "#F1F5F9", color: "#475569", padding: "2px 8px", borderRadius: "4px", fontWeight: "bold" }}>
                          {lead.targetRegion}
                        </span>
                      </div>
                      <div style={{ fontSize: "12px", color: "#475569" }}>
                        <span>이메일: {lead.email}</span> | <span>연락처: {lead.phone}</span>
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "#475569", display: "block" }}>투자 예산 규모</span>
                      <span style={{ fontWeight: "800", fontSize: "16px" }}>${lead.targetBudget.toLocaleString()}</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "11px", color: "#475569", display: "block" }}>실 정산 예정 레퍼럴료 (30%)</span>
                      <span style={{ fontWeight: "800", fontSize: "16px", color: "#15803D" }}>
                        ${calculateReferralOwed(lead.targetBudget).toLocaleString()}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <select
                        value={lead.status}
                        onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                        style={{ padding: "8px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "13px", backgroundColor: "white" }}
                      >
                        <option value="new">신규 인입</option>
                        <option value="assigned">연락 수속 중</option>
                        <option value="under_escrow">에스크로 락(계약 체결)</option>
                        <option value="closed">거래 종결 (수당 이송)</option>
                        <option value="lost">취소/불발</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
