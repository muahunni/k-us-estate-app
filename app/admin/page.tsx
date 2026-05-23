"use client";
import React, { useState } from "react";
interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  targetBudget: number;
  targetRegion: string;
  assignedBrokerId: string | null;
  status: "new" | "assigned" | "under_escrow" | "closed" | "lost";
  createdAt: string;
}
interface Broker {
  id: string;
  fullName: string;
  brokerageName: string;
  operatingRegion: string;
  licenseNumber: string;
}
export default function AdminDashboard() {
  const [brokers] = useState<Broker[]>([
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
      fullName: "김민준",
      brokerageName: "리맥스 코리아 서울-강남",
      operatingRegion: "Seoul-Gangnam",
      licenseNumber: "REG# 11650-2024",
    }
  ]);
  const [leads, setLeads] = useState<Lead[]>([
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
      fullName: "이정현 (Jeonghyun Lee)",
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
      fullName: "James Park (박영수)",
      email: "james.p@gmail.com",
      phone: "+1-213-911-0000",
      targetBudget: 4500000,
      targetRegion: "California-LA",
      assignedBrokerId: "b1",
      status: "under_escrow",
      createdAt: "2026-05-22 14:05",
    }
  ]);
  const handleAssignBroker = (leadId: string, brokerId: string) => {
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
  const handleUpdateStatus = (leadId: string, newStatus: string) => {
    setLeads(prev =>
      prev.map(l => (l.id === leadId ? { ...l, status: newStatus as any } : l))
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
              관리자 페이지 운영 중
            </span>
          </div>
        </div>
      </header>
      <main style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "30px" }}>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>전체 활동 파이프라인 버젯</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#0F172A" }}>
              {activePipelineBudget.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "5px" }}>현재 활성 상태의 리드들이 가진 총 버젯</span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>추정 중개 수수료 수익 (3% 30%)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#2563EB" }}>
              {totalEstimatedReferralRevenue.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#2563EB", fontWeight: "bold", display: "block", marginTop: "5px" }}>
              환산액: {Math.round(totalEstimatedReferralRevenue * 1380).toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>총 종료 (Closed) 수익</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#15803D" }}>
              {totalClosedRevenue.toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#15803D", fontWeight: "bold", display: "block", marginTop: "5px" }}>실제 발생한 중개 수수료</span>
          </div>
        </section>
        <section style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "25px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "5px" }}>신규 생성된 리드 / 배정되지 않은 리드 목록</h2>
          <p style={{ fontSize: "12px", color: "#475569", marginBottom: "20px" }}>
            아래 표에서 브로커를 배정하거나 리드의 상태를 변경할 수 있습니다. 각 리드는 고유한 버젯과 타겟 지역을 가지며, 이를 바탕으로 브로커를 배정합니다.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E2E8F0", color: "#475569", fontWeight: "700" }}>
                  <th style={{ padding: "12px 10px" }}>이름 / 연락처</th>
                  <th style={{ padding: "12px 10px" }}>타겟 지역</th>
                  <th style={{ padding: "12px 10px" }}>타겟 버젯</th>
                  <th style={{ padding: "12px 10px" }}>배정 브로커 선택</th>
                  <th style={{ padding: "12px 10px" }}>리드 진행 상태</th>
                  <th style={{ padding: "12px 10px" }}>추정 수익</th>
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
                          <option value="">브로커 선택 (미배정)</option>
                          {brokers
                            .filter(b => b.operatingRegion === lead.targetRegion)
                            .map(b => (
                              <option key={b.id} value={b.id}>
                                {b.fullName} ({b.brokerageName})
                              </option>
                            ))}
                        </select>
                        {assignedBroker && (
                          <span style={{ fontSize: "10px", color: "#15803D", fontWeight: "bold", display: "block", marginTop: "4px" }}>
                            배정 브로커 라이센스: {assignedBroker.licenseNumber}
                          </span>
                        )}
                      </td>
                      <td style={{ padding: "15px 10px" }}>
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          style={{ padding: "6px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "12px", backgroundColor: "white" }}
                        >
                          <option value="new">신규 생성</option>
                          <option value="assigned">배정 완료</option>
                          <option value="under_escrow">언더 에스크로 진행 중</option>
                          <option value="closed">종료 완료</option>
                          <option value="lost">리드 유실</option>
                        </select>
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "bold", color: lead.status === "closed" ? "#15803D" : "#0F172A" }}>
                        {referralFee.toLocaleString()}
                        <span style={{ fontSize: "10px", display: "block", color: "#475569" }}>
                          (${Math.round(referralFee * 1380).toLocaleString(undefined, { maximumFractionDigits: 0 })})
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
      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "30px 20px", textAlign: "center", color: "#475569", fontSize: "12px", backgroundColor: "white", marginTop: "80px" }}>
        <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Licensed under cross-border real estate referral ledger tools for administrators.</p>
        <p style={{ margin: 0, color: "#94A3B8" }}>© 2026 K-US Real Estate Corridor Network Admin Panel. All rights reserved.</p>
      </footer>
    </div>
  );
}