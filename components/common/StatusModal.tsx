import Swal from 'sweetalert2';

export const StatusModal = Swal.mixin({
    width: '15rem',
    toast: true,
    position: 'top-start',
    showConfirmButton: false,
    timer: 1500,
    icon: 'success',
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})