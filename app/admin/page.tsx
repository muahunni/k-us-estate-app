"use client";
import React, { useState } from "react";
interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  targetBudget: number;
  targetRegion: string;
  direction: "KR_TO_US" | "US_TO_KR";
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
      fullName: "김우진 (한국 자산가)",
      email: "woojin.kim@naver.com",
      phone: "010-9876-5432",
      targetBudget: 2400000,
      targetRegion: "California-LA",
      direction: "KR_TO_US",
      assignedBrokerId: "b1",
      status: "new",
      createdAt: "2026-05-23 18:30",
    },
    {
      id: "l2",
      fullName: "이정현 (미국 유학생 부모)",
      email: "jeoungeun@daum.net",
      phone: "010-5555-4444",
      targetBudget: 1200000,
      targetRegion: "New York-Manhattan",
      direction: "KR_TO_US",
      assignedBrokerId: "b2",
      status: "assigned",
      createdAt: "2026-05-23 17:12",
    },
    {
      id: "l3",
      fullName: "James Park (미국 교민 귀환자)",
      email: "james.p@gmail.com",
      phone: "+1-213-911-0000",
      targetBudget: 4500000,
      targetRegion: "Seoul-Gangnam",
      direction: "US_TO_KR",
      assignedBrokerId: "b3",
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
  const getReferralCalculations = (lead: Lead) => {
    if (lead.direction === "KR_TO_US") {
      const brokerTotalCommission = lead.targetBudget * 0.03;
      const myInboundReferralFee = brokerTotalCommission * 0.30;
      return {
        type: "INBOUND_RECEIVE",
        label: "미국 수당 수취 (30%)",
        grossCommission: brokerTotalCommission,
        amountUSD: myInboundReferralFee,
        amountKRW: myInboundReferralFee * 1380,
        payoutUSD: 0,
        payoutKRW: 0,
        netUSD: myInboundReferralFee,
        netKRW: myInboundReferralFee * 1380,
      };
    } else {
      const alpacaTotalCommission = lead.targetBudget * 0.009;
      const myGrossShare = alpacaTotalCommission * 0.70;
      const referralPayoutToUSBroker = alpacaTotalCommission * 0.30;
      const myNetRetention = myGrossShare - referralPayoutToUSBroker;
      return {
        type: "OUTBOUND_PAYOUT",
        label: "Alpaca 정산 지급 (30%)",
        grossCommission: alpacaTotalCommission,
        amountUSD: myGrossShare / 1380,
        amountKRW: myGrossShare,
        payoutUSD: referralPayoutToUSBroker,
        payoutKRW: referralPayoutToUSBroker,
        netUSD: myNetRetention / 1380,
        netKRW: myNetRetention,
      };
    }
  };
  const totalActiveInboundKRW = leads
    .filter(l => l.status !== "lost")
    .reduce((sum, l) => {
      const calcs = getReferralCalculations(l);
      return sum + (calcs.type === "INBOUND_RECEIVE" ? calcs.netKRW : calcs.amountKRW);
    }, 0);
  const totalActiveOutboundPayoutKRW = leads
    .filter(l => l.status !== "lost")
    .reduce((sum, l) => {
      const calcs = getReferralCalculations(l);
      return sum + calcs.payoutKRW;
    }, 0);
  const totalNetMarginKRW = totalActiveInboundKRW - totalActiveOutboundPayoutKRW;
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
              Alpaca 양경아 마스터 계정
            </span>
          </div>
        </div>
      </header>
      <main style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", display: "flex", flexDirection: "column", gap: "30px" }}>
        <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>총 수취 예정 수수료 (KRW)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#0F172A" }}>
              ₩{Math.round(totalActiveInboundKRW).toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "5px" }}>미국 수취액 및 한국 70퍼센트 Gross 합산</span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>지불 예정 해외 쉐어 분할 수당 (KRW)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#EF4444" }}>
              ₩{Math.round(totalActiveOutboundPayoutKRW).toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#EF4444", fontWeight: "bold", display: "block", marginTop: "5px" }}>
              내가 미국 브로커에게 역송금해줄 정산액
            </span>
          </div>
          <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "10px", padding: "20px" }}>
            <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>최종 세전 순익 (Net consolidated)</span>
            <span style={{ fontSize: "28px", fontWeight: "900", color: "#15803D" }}>
              ₩{Math.round(totalNetMarginKRW).toLocaleString()}
            </span>
            <span style={{ fontSize: "11px", color: "#15803D", fontWeight: "bold", display: "block", marginTop: "5px" }}>지급 유출액을 공제한 순 마진 총액</span>
          </div>
        </section>
        <section style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "25px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "5px" }}>크로스보더 자산가 쌍방향 거래 및 정산 원장</h2>
          <p style={{ fontSize: "12px", color: "#475569", marginBottom: "20px" }}>
            미국행 한국인 투자(인바운드 수취)와 귀속 교민 한국 빌딩 매수(아웃바운드 쉐어 지출) 내역을 단일 원장에서 동적으로 가감 산출합니다.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", textAlign: "left" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E2E8F0", color: "#475569", fontWeight: "700" }}>
                  <th style={{ padding: "12px 10px" }}>고객 정보</th>
                  <th style={{ padding: "12px 10px" }}>유형 / 거래 방향</th>
                  <th style={{ padding: "12px 10px" }}>거래 가액</th>
                  <th style={{ padding: "12px 10px" }}>배정 파트너 중개사</th>
                  <th style={{ padding: "12px 10px" }}>정산 지분 구조</th>
                  <th style={{ padding: "12px 10px" }}>내가 받을 돈 (KRW)</th>
                  <th style={{ padding: "12px 10px" }}>내가 줄 돈 쉐어 (KRW)</th>
                </tr>
              </thead>
              <tbody>
                {leads.map(lead => {
                  const assignedBroker = brokers.find(b => b.id === lead.assignedBrokerId);
                  const calc = getReferralCalculations(lead);
                  return (
                    <tr key={lead.id} style={{ borderBottom: "1px solid #E2E8F0" }}>
                      <td style={{ padding: "15px 10px" }}>
                        <strong style={{ fontSize: "15px", display: "block" }}>{lead.fullName}</strong>
                        <span style={{ fontSize: "12px", color: "#475569" }}>{lead.email} | {lead.phone}</span>
                      </td>
                      <td style={{ padding: "15px 10px" }}>
                        <span style={{
                          padding: "4px 8px",
                          borderRadius: "4px",
                          fontSize: "11px",
                          fontWeight: "bold",
                          backgroundColor: lead.direction === "KR_TO_US" ? "#EFF6FF" : "#FFF1F2",
                          color: lead.direction === "KR_TO_US" ? "#1E40AF" : "#9F1239"
                        }}>
                          {lead.direction === "KR_TO_US" ? "한국인 ➡️ 미국행" : "교민 귀환 ➡️ 한국행"}
                        </span>
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "800" }}>
                        {lead.direction === "KR_TO_US" 
                          ? `$${lead.targetBudget.toLocaleString()}` 
                          : `₩${(lead.targetBudget * 1380).toLocaleString()}`
                        }
                      </td>
                      <td style={{ padding: "15px 10px" }}>
                        <select
                          value={lead.assignedBrokerId || ""}
                          onChange={(e) => handleAssignBroker(lead.id, e.target.value)}
                          style={{ padding: "6px", borderRadius: "5px", border: "1px solid #CBD5E1", fontSize: "12px", backgroundColor: "white", width: "100%" }}
                        >
                          <option value="">미지정</option>
                          {brokers
                            .filter(b => b.operatingRegion === lead.targetRegion)
                            .map(b => (
                              <option key={b.id} value={b.id}>
                                {b.fullName} ({b.brokerageName})
                              </option>
                            ))}
                        </select>
                      </td>
                      <td style={{ padding: "15px 10px", fontSize: "12px" }}>
                        {lead.direction === "KR_TO_US" ? (
                          <span>미국 수당 30% 수취</span>
                        ) : (
                          <span>총 수수료 0.9% 중 내 수취 70%, 이 중 30% 미국 브로커에게 쉐어 지급</span>
                        )}
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "bold", color: "#15803D" }}>
                        ₩{Math.round(calc.type === "INBOUND_RECEIVE" ? calc.netKRW : calc.amountKRW).toLocaleString()}
                      </td>
                      <td style={{ padding: "15px 10px", fontWeight: "bold", color: calc.payoutKRW > 0 ? "#EF4444" : "#0F172A" }}>
                        ₩{Math.round(calc.payoutKRW).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}