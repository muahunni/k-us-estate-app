"use client";
import React, { useState } from "react";
export default function AdminDashboard() {
  const [brokers] = useState([
    {
      id: "b1",
      fullName: "Sarah Park",
      brokerageName: "Keller Williams LA",
      operatingRegion: "California-LA",
      licenseNumber: "DRE# 02145678",
    },
    {
      id: "b2",
      fullName: "Kevin Oh",
      brokerageName: "Compass Manhattan",
      operatingRegion: "New York-Manhattan",
      licenseNumber: "LIC# 104012948",
    },
    {
      id: "b3",
      fullName: "정성필 대표",
      brokerageName: "한남 메이저 빌딩중개",
      operatingRegion: "Seoul-Gangnam",
      licenseNumber: "REG# 11650-2024",
    }
  ]);
  const [leads, setLeads] = useState([
    {
      id: "l1",
      fullName: "김우진",
      email: "woojin.kim@naver.com",
      phone: "010-9876-5432",
      targetBudget: 2400000,
      targetRegion: "California-LA",
      assignedBrokerId: null,
      status: "new",
      createdAt: "2026-05-23 18:30",
    },
    {
      id: "l2",
      fullName: "이정은 (유학 자녀 대리)",
      email: "jeoungeun@daum.net",
      phone: "010-5555-4444",
      targetBudget: 1200000,
      targetRegion: "New York-Manhattan",
      assignedBrokerId: "b2",
      status: "assigned",
      createdAt: "2026-05-23 17:12",
    },
    {
      id: "l3",
      fullName: "James Park (귀환 자산가)",
      email: "james.p@gmail.com",
      phone: "+1-213-911-0000",
      targetBudget: 4500000,
      targetRegion: "California-LA",
      assignedBrokerId: "b1",
      status: "under_escrow",
      createdAt: "2026-05-22 14:05",
    }
  ]);
  const handleAssignBroker = (leadId, brokerId) => {
    setLeads(prev =>
      prev.map(l => {
        if (l.id === leadId) {
          return {
            ...l,
            assignedBrokerId: brokerId === "" ? null : brokerId,
            status: brokerId === "" ? "new" : "assigned",
          };
        }
        return l;
      })
    );
  };
  const handleUpdateStatus = (leadId, newStatus) => {
    setLeads(prev =>
      prev.map(l => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
  };
  const activePipelineBudget = leads
    .filter(l => l.status !== "lost")
    .reduce((sum, l) => sum + l.targetBudget, 0);
  const totalEstimatedReferralRevenue = leads
    .filter(l => l.status !== "lost" && l.status !== "closed")
    .reduce((sum, l) => sum + l.targetBudget * 0.03 * 0.30, 0);
  const totalClosedRevenue = leads
    .filter(l => l.status === "closed")
    .reduce((sum, l) => sum + l.targetBudget * 0.03 * 0.30, 0);
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#F8FAFC", color: "#0F172A", fontFamily: "sans-serif" }}>
      <header style={{ borderBottom: "1px solid #E2E8F0", backgroundColor: "white", padding: "15px 20px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "4px", backgroundColor: "#0F172A", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "14px" }}>
              HQ
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "18px", letterSpacing: "-0.02em", display: "block" }}>K-US Corridor HQ</span>
              <span style={{ fontSize: "10px", color: "#475569", fontWeight: "bold", textTransform: "uppercase" }}>Master Admin Operations</span>
            </div>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#F43F5E", fontWeight: "bold", border: "1px solid #FECDD3", padding: "4px 10px", borderRadius: "100px", backgroundColor: "#FFF1F2" }}>
              실시간 거래 승인 원장 감시 중
            </span>
          </div>
        </div>
      </header>
      <main style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "30px" }}>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>전체 거래 파이프라인 자산 규모</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#0F172A" }}>
              ${activePipelineBudget.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "5px" }}>매수 희망 및 계약 진행액 총합</span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>예상 유료 수수료 계약 잔정액 (30% 리퍼럴 피)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#2563EB" }}>
              ${totalEstimatedReferralRevenue.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#2563EB", fontWeight: "bold", display: "block", marginTop: "5px" }}>
              국내 정산액 환산: ₩{(totalEstimatedReferralRevenue * 1380).toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>거래 종결 완료 누적 수당 (Closed)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#15803D" }}>
              ${totalClosedRevenue.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#15803D", fontWeight: "bold", display: "block", marginTop: "5px" }}>실 출금 가능 전배 정산액</span>
          </div>
        </section>
        <section style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "25px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "5px" }}>인입된 자산가 리드 일체 및 실시간 브로커 추천 관리 시스템</h2>
          <p style={{ fontSize: "12px", color: "#475569", marginBottom: "20px" }}>
            계산기를 두드린 고액 자녀 부모 및 이민 자산가의 개인 정보입니다. 안전 법률 검토에 입각해 가장 적절한 라이선스 브로커를 원터치 매칭합니다.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E2E8F0", color: "#475569", fontWeight: "700" }}>
                  <th style={{ padding: "12px 10px" }}>인입 일시 / 고객 정보</th>
                  <th style={{ padding: "12px 10px" }}>매수 지역</th>
                  <th style={{ padding: "12px 10px" }}>자산 자본금</th>
                  <th style={{ padding: "12px 10px" }}>매칭 파트너 공인중개업자</th>
                  <th style={{ padding: "12px 10px" }}>진행 거래 에스크로 상태</th>
                  <th style={{ padding: "12px 10px" }}>리퍼럴 정산 금액</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => {
                  const assignedBroker = brokers.find(b => b.id === lead.assignedBrokerId);
                  const referralFee = lead.targetBudget * 0.03 * 0.30;
                  return (
                    <tr key={lead.id} style={{ borderBottom: "1px solid #E2E8F0" }}>
                      <td style={{ padding: "15px 10px" }}>
                        <span style={{ fontSize: "11px", color: "#94A3B8", display: "block" }}>{lead.createdAt}</span>
                        <strong style={{ fontSize: "15px", display: "block" }}>{lead.fullName}</strong>
                        <span style={{ fontSize: "12px", color: "#475569" }}>{lead.email} | {lead.phone}</span>
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "bold" }}>{lead.targetRegion}</td>
                      <td style={{ padding: "15px 10px", fontWeight: "800" }}>${lead.targetBudget.toLocaleString()}</td>
                      <td style={{ padding: "15px 10px" }}>
                        <select
                          value={lead.assignedBrokerId || ""}
                          onChange={(e) => handleAssignBroker(lead.id, e.target.value)}
                          style={{ padding: "6px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "12px", backgroundColor: "white", width: "100%" }}
                        >
                          <option value="">미지정 (미승인 리드)</option>
                          {brokers
                            .filter(b => b.operatingRegion === lead.targetRegion)
                            .map(b => (
                              <option key={b.id} value={b.id}>
                                {b.fullName} ({b.brokerageName})
                              </option>
                            ))
                          }
                        </select>
                        {assignedBroker && (
                          <span style={{ fontSize: "10px", color: "#15803D", fontWeight: "bold", display: "block", marginTop: "4px" }}>
                            라이선스 검증: {assignedBroker.licenseNumber}
                          </span>
                        )}
                      </td>
                      <td style={{ padding: "15px 10px" }}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          style={{ padding: "6px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "12px", backgroundColor: "white" }}
                        >
                          <option value="new">신접수</option>
                          <option value="assigned">연계 개시</option>
                          <option value="under_escrow">에스크로 매수 서명</option>
                          <option value="closed">정산 완결</option>
                          <option value="lost">불발</option>
                        </select>
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "bold", color: lead.status === "closed" ? "#15803D" : "#0F172A" }}>
                        ${referralFee.toLocaleString()}
                        <span style={{ fontSize: "10px", display: "block", color: "#475569" }}>
                          (₩{(referralFee * 1380).toLocaleString(undefined, { maximumFractionDigits: 0 })})
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "30px 20px", textAlign: "center", color: "#475569", fontSize: "12px", backgroundColor: "white", marginTop: "100px" }}>
        <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Licensed under cross-border real estate referral ledger tools for administrators.</p>
        <p style={{ margin: 0, color: "#94A3B8" }}>© 2026 K-US Real Estate Corridor Network Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}
