import '../css/CustomSection.css';

export function CustomSection ({ children, id, title = 'empty' }) {
  return (
    <section className='custom-section'>
      <div className={id}>
        <h3 className='title'>{title}</h3>
        <div className='main-content'>{children}</div>
      </div>
    </section>
  );
}
