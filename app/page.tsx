"use client";

import { useRef, useState } from "react";

type IconName =
  | "cart"
  | "chart"
  | "users"
  | "orders"
  | "production"
  | "purchase"
  | "search"
  | "plus"
  | "download"
  | "trash"
  | "refresh"
  | "upload"
  | "calendar"
  | "bell"
  | "help"
  | "chevron"
  | "close"
  | "menu";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    cart: <><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 4h2l2.5 11h11l2-8H6"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><path d="m3 8 6-5 6 6 7-6"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    orders: <><path d="M6 3h12v18H6z"/><path d="M9 7h6M9 11h6M9 15h3"/><path d="m15 17 2 2 4-5"/></>,
    production: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6M6 9v6M18 9v6M9 18h6"/></>,
    purchase: <><path d="M3 4h2l2.5 11h11l2-8H6"/><path d="M9 19h.01M18 19h.01"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5"/><path d="M5 19h14"/></>,
    trash: <><path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15M10 10v7M14 10v7"/></>,
    refresh: <><path d="M20 6v5h-5"/><path d="M19 11a7.5 7.5 0 1 0 .2 6"/></>,
    upload: <><path d="M12 16V4m0 0-5 5m5-5 5 5"/><path d="M5 15v5h14v-5"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    help: <><circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.8 2.8 0 1 1 3.3 2.8c-.8.2-.8 1.2-.8 1.7M12 17h.01"/></>,
    chevron: <path d="m8 10 4 4 4-4"/>,
    close: <path d="m6 6 12 12M18 6 6 18"/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16"/>,
  };

  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
    }, 700);
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <button className="menu-button" aria-label="Mở menu" onClick={() => setIsSidebarOpen(true)}><Icon name="menu" /></button>
        <div className="brand"><span className="brand-mark">ETEK</span><span>PHẦN MỀM ERP</span></div>
        <div className="topbar-actions">
          <button className="flag flag-vn" aria-label="Tiếng Việt">★</button>
          <button className="flag flag-en" aria-label="English"><span>✦</span></button>
          <button className="icon-button notification" aria-label="Thông báo"><Icon name="bell" /><b>3</b></button>
          <button className="icon-button" aria-label="Trợ giúp"><Icon name="help" /></button>
          <div className="profile-avatar">●</div>
          <div className="profile-copy"><strong>tpadmin</strong><small>Quản trị hệ thống</small></div>
          <Icon name="chevron" size={18} />
        </div>
      </header>

      <aside className={`sidebar ${isSidebarOpen ? "is-open" : ""}`}>
        <button className="sidebar-close" aria-label="Đóng menu" onClick={() => setIsSidebarOpen(false)}><Icon name="close" /></button>
        <nav aria-label="Điều hướng chính">
          <a className="nav-item active" href="#orders"><Icon name="cart" /><span>Quản lý đơn hàng</span></a>
          <a className="nav-item" href="#tracking"><Icon name="chart" /><span>AI tracking</span></a>
          <a className="nav-item" href="#accounts"><Icon name="users" /><span>Quản lý tài khoản</span></a>
        </nav>
        <button className="collapse-button" aria-label="Thu gọn thanh điều hướng">«</button>
      </aside>
      {isSidebarOpen && <button className="sidebar-scrim" aria-label="Đóng menu" onClick={() => setIsSidebarOpen(false)} />}

      <main className="workspace" id="orders">
        <div className="tabs" role="tablist" aria-label="Nhóm quản lý">
          <button className="tab active" role="tab" aria-selected="true"><Icon name="orders" />Danh sách đơn hàng</button>
          <button className="tab" role="tab" aria-selected="false"><Icon name="production" />Quản lý sản xuất</button>
          <button className="tab" role="tab" aria-selected="false"><Icon name="purchase" />Quản lý mua hàng</button>
        </div>

        <section className="content-card">
          <div className="primary-actions">
            <button className="btn btn-create" onClick={() => setIsModalOpen(true)}><Icon name="plus" />Tạo đơn hàng</button>
            <button className="btn btn-export"><Icon name="download" />Export</button>
            <button className="btn btn-delete"><Icon name="trash" />Xóa</button>
          </div>
          <div className="filters">
            <label className="search-box"><Icon name="search" /><input aria-label="Tìm kiếm đơn hàng" placeholder="Tìm kiếm theo tên, mã, số điện thoại, email..." /></label>
            <div className="filter-right">
              <label className="select-wrap"><select aria-label="Lọc trạng thái"><option>Tất cả</option><option>Đang xử lý</option><option>Hoàn thành</option></select><Icon name="chevron" size={18}/></label>
              <button className="refresh-button" aria-label="Làm mới"><Icon name="refresh" /></button>
            </div>
          </div>

          <div className="table-wrap">
            <table>
              <thead><tr><th><input type="checkbox" aria-label="Chọn tất cả" /></th><th>STT</th><th>Tên</th><th>Mã đơn hàng</th><th>Số điện thoại</th><th>Trạng thái</th><th>Hoạt động</th></tr></thead>
              <tbody><tr><td colSpan={7}><div className="empty-state"><span>Không có dữ liệu đơn hàng</span><small>Nhấn “Tạo đơn hàng” để thêm đơn đầu tiên</small></div></td></tr></tbody>
            </table>
          </div>
          <footer className="table-footer">
            <strong>Hiển thị 0 - 0 / 0 đơn hàng</strong>
            <div className="pagination"><button aria-label="Trang trước">‹</button><button className="current">1</button><button aria-label="Trang sau">›</button><select aria-label="Số dòng mỗi trang"><option>10 / trang</option><option>20 / trang</option></select></div>
          </footer>
        </section>
      </main>

      {isModalOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsModalOpen(false); }}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="create-order-title">
            <header className="modal-header"><h1 id="create-order-title">Tạo đơn hàng</h1><button aria-label="Đóng" onClick={() => setIsModalOpen(false)}><Icon name="close" /></button></header>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-grid">
                  <label className="field"><span>Tên <b>(*)</b></span><input required placeholder="Nhập tên" /></label>
                  <label className="field"><span>Số điện thoại</span><input inputMode="tel" placeholder="Nhập số điện thoại" /></label>
                  <div className="field photo-field"><span>Ảnh khuôn mặt <b>(*)</b></span><button type="button" className="upload-box" onClick={() => fileInputRef.current?.click()}><Icon name="upload" size={35}/><strong>{fileName || "Nhấn vào đây để chụp ảnh"}</strong><small>Định dạng: JPG, PNG. Kích thước tối đa 2MB</small></button><input ref={fileInputRef} type="file" accept="image/png,image/jpeg" hidden required={!fileName} onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")} /></div>
                  <div className="side-fields">
                    <fieldset className="gender"><legend>Giới tính <b>(*)</b></legend><label><input type="radio" name="gender" required /> Nam</label><label><input type="radio" name="gender" /> Nữ</label></fieldset>
                    <label className="field"><span>Công ty/Tổ chức <b>(*)</b></span><input required placeholder="Nhập công ty/tổ chức" /></label>
                  </div>
                  <label className="field"><span>Ngày sinh <b>(*)</b></span><span className="input-icon"><input required type="date" /><Icon name="calendar" size={18}/></span></label>
                  <label className="field"><span>Địa chỉ</span><input placeholder="Nhập địa chỉ" /></label>
                  <label className="field field-full"><span>Email</span><input type="email" placeholder="Nhập email" /></label>
                  <label className="field field-full"><span>Ghi chú</span><textarea rows={3} placeholder="Nhập ghi chú cho đơn hàng" /></label>
                </div>
              </div>
              <footer className="modal-footer"><button type="button" className="btn btn-cancel" onClick={() => setIsModalOpen(false)}>Hủy</button><button type="submit" className="btn btn-save" disabled={submitted}>{submitted ? "Đang lưu..." : "Lưu"}</button></footer>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}
