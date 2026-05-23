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
  
  const [calculatorMode, setCalculatorMode] = useState<"standard" | "education">("education");
  const [monthlyRentUSD, setMonthlyRentUSD] = useState<number>(4500);

  const purchasePriceKRW = budgetUSD * exchangeRate;
  const requiresBoKReport = budgetUSD > 1000000;
  const estimatedFIRPTA_Withholding = budgetUSD * 0.15;

  const totalRentLossUSD = monthlyRentUSD * 48;
  const totalRentLossKRW = totalRentLossUSD * exchangeRate;
  const potentialAssetEquityGainUSD = budgetUSD * 0.12;
  const potentialAssetEquityGainKRW = potentialAssetEquityGainUSD * exchangeRate;

  const handleCalculateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert("상세 자산 분석 가이드 리포트를 다운로드 받으실 고객 정보를 올바르게 기입해 주세요.");
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
              AP
            </div>
            <div>
              <span style={{ fontWeight: "800", fontSize: "20px", letterSpacing: "-0.02em", display: "block" }}>K-US Real Estate Corridor</span>
              <span style={{ fontSize: "10px", color: "#475569", fontWeight: "bold", textTransform: "uppercase" }}>Alpaca x Yang Kyung-ah Partners</span>
            </div>
          </div>
          <div>
            <span style={{ fontSize: "12px", color: "#2563EB", fontWeight: "bold" }}>Alpaca 빌딩 매매 수석 파트너 양경아 전용</span>
          </div>
        </div>
      </header>

      <div style={{ backgroundColor: "#0F172A", color: "white", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <span style={{ display: "inline-block", fontSize: "12px", fontWeight: "bold", padding: "5px 12px", borderRadius: "4px", backgroundColor: "rgba(37, 99, 235, 0.2)", color: "#3B82F6", border: "1px solid rgba(37, 99, 235, 0.3)", marginBottom: "15px" }}>
            대한민국 1위 상업용 자산 플랫폼 Alpaca 해외 자본 이송 신고 인증 센터
          </span>
          <h1 style={{ fontSize: "32px", fontWeight: "850", letterSpacing: "-0.03em", marginBottom: "15px", lineHeight: "1.25" }}>
            미국 보스턴, LA, 맨해튼 유학 자녀 실거주용 부동산 매입 <br/>
            소멸하는 월세를 건물 자산 가격 상승분으로 방어하세요
          </h1>
          <p style={{ color: "#94A3B8", fontSize: "16px", maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            Remittance 용도 승인부터 증여세 공제 한도 가감 구조까지, 알파카 자산 파트너 양경아가 최정예 로컬 한인 중개망을 연합하여 에스크로 마감과 정산 처리를 일체 전담 대행합니다.
          </p>
        </div>
      </div>

      <main style={{ maxWidth: "1100px", margin: "40px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", gap: "10px", marginBottom: "25px", borderBottom: "2px solid #E2E8F0", paddingBottom: "10px" }}>
          <button 
            onClick={() => setCalculatorMode("education")}
            style={{ 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "6px", 
              fontWeight: "bold", 
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: calculatorMode === "education" ? "#0F172A" : "transparent",
              color: calculatorMode === "education" ? "white" : "#475569"
            }}
          >
            🎓 미국 유학 자녀 콘도 구매실익 분석기
          </button>
          <button 
            onClick={() => setCalculatorMode("standard")}
            style={{ 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "6px", 
              fontWeight: "bold", 
              fontSize: "14px",
              cursor: "pointer",
              backgroundColor: calculatorMode === "standard" ? "#0F172A" : "transparent",
              color: calculatorMode === "standard" ? "white" : "#475569"
            }}
          >
            🏢 일반 국외 자산 취득 세무 세액 계산기
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "30px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
            {calculatorMode === "education" ? (
              <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "20px", borderBottom: "1px solid #E2E8F0", paddingBottom: "15px" }}>
                  대치동 학부모 전용: 미국 주요 대학 인근 4년 월세 손실 대조 분석
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "25px", marginBottom: "30px" }}>
                  <div style={{ spaceY: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "13px", marginBottom: "8px" }}>
                      <span>현지 예상 임차 원가 (월세 USD)</span>
                      <span style={{ color: "#EF4444" }}>${monthlyRentUSD.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range"
                      min={2500}
                      max={9000}
                      step={250}
                      value={monthlyRentUSD}
                      onChange={(e) => setMonthlyRentUSD(Number(e.target.value))}
                      style={{ width: "100%", height: "6px", backgroundColor: "#E2E8F0", borderRadius: "4px", outline: "none" }}
                    />
                    <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "5px" }}>
                      하버드(보스턴), UCLA(LA), NYU(맨해튼) 고급 원룸 기준 평균 시세
                    </span>
                  </div>

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: "13px", marginBottom: "8px" }}>
                      <span>목표 주택 취득 가격 (USD)</span>
                      <span style={{ color: "#2563EB" }}>${budgetUSD.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range"
                      min={300000}
                      max={5000000}
                      step={50000}
                      value={budgetUSD}
                      onChange={(e) => setBudgetUSD(Number(e.target.value))}
                      style={{ width: "100%", height: "6px", backgroundColor: "#E2E8F0", borderRadius: "4px", outline: "none" }}
                    />
                    <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "5px" }}>
                      목표 부동산 원화 환산 가격: ₩{purchasePriceKRW.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                  <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FEE2E2", borderRadius: "8px", padding: "18px" }}>
                    <span style={{ fontSize: "12px", color: "#991B1B", fontWeight: "bold", display: "block", marginBottom: "5px" }}>4년 유학 시 그냥 날아가는 매몰 월세</span>
                    <span style={{ fontSize: "22px", fontWeight: "900", color: "#991B1B" }}>
                      ₩{Math.round(totalRentLossKRW).toLocaleString()}
                    </span>
                    <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "3px" }}>
                      총 ${totalRentLossUSD.toLocaleString()} 임차 부담료
                    </span>
                  </div>

                  <div style={{ backgroundColor: "#F0FDF4", border: "1px solid #DCFCE7", borderRadius: "8px", padding: "18px" }}>
                    <span style={{ fontSize: "12px", color: "#166534", fontWeight: "bold", display: "block", marginBottom: "5px" }}>예상 연평균 3% 자산 가치 상승 시의 차익 가치</span>
                    <span style={{ fontSize: "22px", fontWeight: "900", color: "#166534" }}>
                      ₩{Math.round(potentialAssetEquityGainKRW).toLocaleString()}
                    </span>
                    <span style={{ fontSize: "11px", color: "#475569", display: "block", marginTop: "3px" }}>
                      자본 이송을 통한 자산 세무 차익 극대화 추산
                    </span>
                  </div>
                </div>

                <div style={{ marginTop: "25px", padding: "20px", backgroundColor: "#F1F5F9", borderRadius: "8px", borderLeft: "4px solid #0F172A" }}>
                  <span style={{ fontSize: "14px", fontWeight: "800", display: "block", marginBottom: "10px" }}>양경아 파트너의 외환 & 국내 세무 통합 구조 가이드라인</span>
                  <ul style={{ margin: 0, paddingLeft: "18px", fontSize: "12px", color: "#475569" }}>
                    <li style={{ marginBottom: "5px" }}>
                      <strong>자녀 명의 공동 증여 지분 전략</strong>: 성인인 유학생 자녀에게 대한민국 세법 기준 10년간 최대 5천만 원의 증여 공제 혜택 세팅을 적용한 뒤, 미국 소득세법(IRC Sec. 121) 기준 2년 이상 주거주지 거주 증빙을 선확보하면, 향후 부동산 청산 시 인당 최대 $25만 달러의 자본이득세를 전액 비과세 처리해 드립니다.
                    </li>
                    <li style={{ marginBottom: "5px" }}>
                      <strong>외국환거래법 제18조 사전 신고 의무</strong>: 일반 유학 자금 송금 용도로 송금한 외화로는 현지 실거주 콘도를 구매할 수 없습니다. 해외 취득 신고를 전 은행 정밀 실사로 통과하여 추후 국세청 자금 출처 조사 리스크를 원천 제거해 드립니다.
                    </li>
                    <li>
                      <strong>아파트 전매 관리 연동</strong>: 사장님의 정산망에 등록된 미국 현지 한인 파트너 중개사가 자녀 유학 학기 동안의 주거 관리 위탁을 맡아 등기 권리 수당을 지켜 드립니다.
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: "white", border: "1px solid #E2E8F0", borderRadius: "12px", padding: "30px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
                <h1 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "20px", borderBottom: "1px solid #E2E8F0", paddingBottom: "15px" }}>
                  🏢 일반 국외 자산 취득 세무 세액 계산기
                </h1>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginBottom: "25px" }}>
                  <div style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px", padding: "15px" }}>
                    <span style={{ fontSize: "12px", color: "#475569", fontWeight: "bold", display: "block", marginBottom: "5px" }}>총 구매 예산 (KRW)</span>
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
                      미국 연방 정부 원천징수 (FIRPTA): 15% (매각 시 세부 사항 적용)
                    </span>
                  </div>
                </div>

                {requiresBoKReport && (
                  <div style={{ padding: "15px", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", color: "#78350F", borderRadius: "8px", display: "flex", gap: "10px" }}>
                    <span style={{ fontSize: "20px" }}>⚠️</span>
                    <div style={{ fontSize: "12px" }}>
                      <span style={{ fontWeight: "bold", display: "block", marginBottom: "2px" }}>대한민국 시외환 관리 규정 지정 한도 경고</span>
                      <p style={{ margin: 0, color: "#475569", lineHeight: "1.5" }}>
                        해외 부동산 취득 자금 중 실질 취득 금액이 $100만을 초과하는 경우, <strong>반드시 사전에 지정을 완료한 메이저 총 매각 은행 및 한국은행 지정 원천 보고서(BOK Report)</strong> 인가를 전원에 통과해야 안전 거래 수령이 가능합니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!leadCreated ? (
              <div style={{ backgroundColor: "#0F172A", color: "white", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold", display: "block", marginBottom: "5px" }}>1:1 국외 자산 취득 & 이민 세법 무료 세밀 보고서 신청</span>
                <p style={{ fontSize: "13px", color: "#94A3B8", marginBottom: "25px" }}>상태 분석 가이드가 포함된 PDF 리포트 파일과 함께 신뢰할 수 있는 수수료 셰어 연결을 보장합니다.</p>
                
                <form onSubmit={handleCalculateAndSubmit} style={{ display: "grid", gap: "15px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                    <div>
                      <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px", color: "#CBD5E1" }}>신청인 성함</label>
                      <input 
                        type="text" 
                        placeholder="홍길동"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)} 
                        style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #475569", fontSize: "14px", backgroundColor: "#1E293B", color: "white", boxSizing: "border-box" }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px", color: "#CBD5E1" }}>이메일 주소</label>
                      <input 
                        type="email" 
                        placeholder="vip@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #475569", fontSize: "14px", backgroundColor: "#1E293B", color: "white", boxSizing: "border-box" }}
                        required
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                    <div>
                      <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px", color: "#CBD5E1" }}>상담 전화번호</label>
                      <input 
                        type="tel" 
                        placeholder="010-1234-5678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #475569", fontSize: "14px", backgroundColor: "#1E293B", color: "white", boxSizing: "border-box" }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: "11px", fontWeight: "bold", display: "block", marginBottom: "5px", color: "#CBD5E1" }}>미국 타겟 주요 대학 지역</label>
                      <select 
                        value={targetCity}
                        onChange={(e) => setTargetRegion(e.target.value)} 
                        style={{ width: "100%", padding: "12px", borderRadius: "5px", border: "1px solid #475569", fontSize: "14px", backgroundColor: "#1E293B", color: "white", boxSizing: "border-box" }}
                      >
                        <option value="California-LA">UCLA / 남가주 대학 (로스앤젤레스)</option>
                        <option value="New York-Manhattan">NYU / 컬럼비아 (맨해튼)</option>
                        <option value="Hawaii-Honolulu">하와이 주립대 (호놀룰루)</option>
                        <option value="Boston">하버드 / MIT (보스턴 캠퍼스)</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    style={{ width: "100%", backgroundColor: "#2563EB", border: "none", color: "white", fontWeight: "bold", padding: "15px", fontSize: "14px", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}
                  >
                    양국 자산가 실시간 세법 분석 리포트 PDF 출력 & VIP 디테일 배정 신청
                  </button>
                </form>
              </div>
            ) : (
              <div style={{ backgroundColor: "#15803D", color: "white", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
                <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>✓</span>
                <h3 style={{ fontSize: "22px", fontWeight: "bold" }}>상담 접수 및 외화 이관 정밀 시안 리포트 발송 완료</h3>
                <p style={{ fontSize: "14px", color: "#F0FDF4", lineHeight: "1.6", maxWidth: "650px", margin: "0 auto 20px auto" }}>
                  사장님께서 작성하신 <strong>{email}</strong> 메일 주소로 국내 법령 및 자녀 공동 지분 증여 환급금 수식이 탑재된 VIP 개별 리포트 검토본을 즉시 발송하였습니다. 알파카 수석 중개파트너 <strong>양경아 마스터</strong>가 4시간 안에 직접 연락처로 유선 보수 브리핑을 안내해 드립니다.
                </p>
                <button 
                  onClick={() => setLeadCreated(false)}
                  style={{ backgroundColor: "white", border: "none", color: "#15803D", fontWeight: "bold", padding: "10px 20px", borderRadius: "5px", fontSize: "13px", cursor: "pointer" }}
                >
                  시뮬레이터 추가 조율하기
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #E2E8F0", padding: "30px 20px", textAlign: "center", color: "#475569", fontSize: "12px", backgroundColor: "white", marginTop: "100px" }}>
        <p style={{ margin: "0 0 5px 0", fontWeight: "500" }}>Licensed under cross-border real estate referral network systems associated with Alpaca real estate.</p>
        <p style={{ margin: 0, color: "#94A3B8" }}>© 2026 K-US Real Estate Corridor Network Area. All rights reserved.</p>
      </footer>
    </div>
  );
}